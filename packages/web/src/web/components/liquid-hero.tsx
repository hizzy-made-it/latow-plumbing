import { useEffect, useState } from "react";
import { LiquidMetal } from "@paper-design/shaders-react";
import { useReducedMotion } from "motion/react";

/**
 * Tuned off the stock chrome preset to the Latow palette — navy field with a
 * water-blue tint so it reads as water under pressure rather than silver.
 * Falls back to a static gradient when reduced-motion is set or WebGL is absent,
 * so the scrim and text contrast behave identically either way.
 */
export function LiquidBackdrop() {
  const reduce = useReducedMotion();
  const [webgl, setWebgl] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      setWebgl(Boolean(c.getContext("webgl2") ?? c.getContext("webgl")));
    } catch {
      setWebgl(false);
    }
  }, []);

  const showShader = webgl === true && !reduce;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* static base — always painted, so there is never a flash of empty canvas */}
      <div className="absolute inset-0 bg-navy-900" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 22% 12%, #32748A 0%, #1A3450 38%, #0B1B2E 72%, #060F1A 100%)",
        }}
      />

      {/* CSS caustics — carries the hero on its own when WebGL is unavailable,
          and sits under the shader as depth when it is. */}
      <div className="absolute inset-0 mix-blend-screen">
        <div
          className="drift-a absolute inset-[-10%]"
          style={{
            background:
              "radial-gradient(46% 52% at 74% 34%, rgba(95,181,206,0.45) 0%, transparent 68%)",
            filter: "blur(24px)",
          }}
        />
        <div
          className="drift-b absolute inset-[-10%]"
          style={{
            background:
              "radial-gradient(38% 46% at 56% 74%, rgba(50,116,138,0.55) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          background:
            "repeating-linear-gradient(118deg, rgba(143,227,245,0.5) 0px, rgba(143,227,245,0.5) 1px, transparent 1px, transparent 46px)",
          maskImage: "radial-gradient(70% 70% at 78% 30%, #000 0%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(70% 70% at 78% 30%, #000 0%, transparent 72%)",
        }}
      />

      {showShader && (
        <div className="absolute inset-0 opacity-90">
          <LiquidMetal
            style={{ width: "100%", height: "100%" }}
            colorBack="#0B1B2E"
            colorTint="#5FB5CE"
            scale={0.85}
            speed={0.6}
            softness={0.32}
            repetition={2.4}
            shiftRed={0.24}
            shiftBlue={0.38}
            distortion={0.13}
            contour={0.42}
            angle={62}
            shape="none"
          />
        </div>
      )}

      {/* readability scrim — headline contrast must not depend on the shader frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-navy-900/15 to-navy-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/35 to-transparent" />

      {/* copper horizon line at the base */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-copper-500/40 to-transparent" />
    </div>
  );
}
