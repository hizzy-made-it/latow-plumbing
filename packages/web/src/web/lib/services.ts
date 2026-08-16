export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  includes: string[];
  signs: { title: string; body: string }[];
  process: { step: string; body: string }[];
  faqs: { q: string; a: string }[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "plumbing-repairs",
    title: "Plumbing Repairs",
    short: "Repairs",
    icon: "Wrench",
    tagline: "Find the actual cause. Fix it once.",
    metaTitle: "Plumbing Repair in Orange City, FL | Latow Brothers Plumbing",
    metaDescription:
      "Licensed plumbing repair in Orange City, DeLand & Deltona FL. Leaks, running toilets, low pressure, clogged drains. Family-owned since 1978. Call (386) 775-4422.",
    intro:
      "Most plumbing repairs get done twice — once by whoever guessed, and once by whoever found the real problem. We diagnose before we quote, so the drain that clogs every three months gets traced back to the belly in the line or the root intrusion actually causing it, not just cabled clear and forgotten.",
    includes: [
      "Leak detection and repair — supply lines, drain lines, slab and wall leaks",
      "Faucet, valve, and fixture repair or replacement",
      "Toilet repair: running, weak flush, rocking, wax ring and flange work",
      "Shower and tub valve repair, cartridge replacement, diverter issues",
      "Low water pressure diagnosis across the whole home",
      "Hose bibb, angle stop, and shut-off valve replacement",
      "Pipe repair for copper, CPVC, PEX and galvanized",
      "Commercial fixture and restroom repair",
    ],
    signs: [
      {
        title: "The same drain clogs over and over",
        body: "Recurring clogs almost never come back on their own. There is a slope problem, a root intrusion, or a partial collapse holding debris. Cabling it every few months treats the symptom and hides the cost.",
      },
      {
        title: "Water pressure dropped across the whole house",
        body: "One weak fixture is a fixture problem. Every fixture weak at once points to the supply — a failing pressure regulator, a partially closed main, or scale buildup in aging galvanized pipe.",
      },
      {
        title: "Your water bill jumped with no change in usage",
        body: "A silent leak is the usual answer, and in Florida it is often a slab or irrigation line. A running toilet flapper alone can waste more than 200 gallons a day.",
      },
      {
        title: "Stains, warm spots, or the sound of water with everything off",
        body: "Ceiling or wall discoloration, a warm patch on the floor, or running water you can hear with every fixture closed all mean an active leak that is already doing damage.",
      },
    ],
    process: [
      {
        step: "Diagnose",
        body: "We isolate the actual failure point before quoting anything — pressure test, camera, or meter check depending on the symptom.",
      },
      {
        step: "Explain and price",
        body: "You get the cause in plain language and a price before work starts. If there is a cheaper fix that will hold, we say so.",
      },
      {
        step: "Repair",
        body: "Done with materials that meet Florida code, by a licensed plumber, in one visit whenever the parts allow.",
      },
      {
        step: "Verify and clean up",
        body: "We test under real conditions, confirm the fix, and leave the space the way we found it. One-year labor warranty.",
      },
    ],
    faqs: [
      {
        q: "Do you charge for a diagnostic visit?",
        a: "We quote the diagnostic up front when you call so there are no surprises, and the office will tell you exactly what the visit costs before we're dispatched. Call (386) 775-4422 and we'll walk you through it.",
      },
      {
        q: "Can you repair it the same day?",
        a: "Often, yes — most common repairs are handled on the first visit because our trucks carry standard valves, cartridges, and fittings. Jobs needing a special-order part get scheduled as soon as it lands.",
      },
      {
        q: "Is the repair warrantied?",
        a: "Every repair carries our 1-year labor warranty. Manufacturer warranties on parts and fixtures apply on top of that.",
      },
      {
        q: "Do you work on commercial buildings?",
        a: "Yes. We handle repairs for restaurants, retail, offices, and multi-family properties across Volusia County, and have since 1978.",
      },
    ],
    featured: true,
  },
  {
    slug: "water-heaters",
    title: "Water Heaters",
    short: "Water Heaters",
    icon: "Flame",
    tagline: "Repair, replacement, tankless, and solar.",
    metaTitle: "Water Heater Repair & Replacement Orange City FL | Latow Brothers",
    metaDescription:
      "Water heater repair, replacement & tankless installation in Orange City, Deltona & DeLand FL. Licensed plumbers since 1978. 1-year labor warranty. Call (386) 775-4422.",
    intro:
      "A water heater rarely dies quietly — it either floods a garage or gives you a cold shower on the worst possible morning. We repair every type we install, and we'll tell you honestly when a repair makes sense versus when you're pouring money into a tank that's already past its service life.",
    includes: [
      "Water heater repair — thermostats, elements, gas valves, thermocouples, pilot assemblies",
      "Tank water heater replacement, electric and gas",
      "Tankless water heater installation and service",
      "Solar water heating systems, install and repair",
      "Anode rod replacement and tank flushing",
      "Expansion tank, T&P valve, and drain pan installation",
      "Recirculation pumps for faster hot water",
      "Commercial water heater service",
    ],
    signs: [
      {
        title: "Hot water runs out faster than it used to",
        body: "Sediment buildup takes up volume in the tank and insulates the element from the water. It's the most common reason a heater that used to be fine suddenly isn't.",
      },
      {
        title: "Rusty or metallic-smelling hot water",
        body: "When the anode rod is spent, the tank lining starts going. Caught early it's a rod replacement; caught late it's a new heater.",
      },
      {
        title: "Popping or rumbling from the tank",
        body: "Water trapped under a sediment layer boiling off. It stresses the tank and drives up the electric bill.",
      },
      {
        title: "Water around the base, or the unit is over 10 years old",
        body: "Any moisture at the base of a tank means plan for replacement now, not after it lets go. Most tanks in Florida water give you 8–12 years.",
      },
    ],
    process: [
      {
        step: "Assess",
        body: "We check age, capacity, condition, and how you actually use hot water — a family of five and a retired couple need different answers.",
      },
      {
        step: "Repair or replace, honestly",
        body: "A four-year-old heater with a bad element gets repaired. A twelve-year-old rusting tank gets replaced. We tell you which one you have.",
      },
      {
        step: "Install to code",
        body: "Proper T&P discharge, expansion tank, drain pan, correct venting, and seismic-free secure mounting. Old unit hauled away.",
      },
      {
        step: "Test and walk you through it",
        body: "We set the temperature safely, verify recovery, and show you the shut-off and how to flush it — so you get the full service life out of it.",
      },
    ],
    faqs: [
      {
        q: "How long does a water heater last in Florida?",
        a: "Typically 8–12 years for a tank unit. Central Florida's mineral content accelerates sediment buildup, so flushing annually genuinely extends it. Tankless units commonly run 20 years with descaling.",
      },
      {
        q: "Is tankless worth it?",
        a: "It depends on your household. Tankless makes strong sense for high hot-water demand, tight spaces, or if you want 20+ years of service. For a small household replacing a working tank, the payback period can be long. We'll give you the straight math for your situation.",
      },
      {
        q: "Can you replace a water heater the same day?",
        a: "Usually yes for standard tank sizes — we keep common units available. Tankless and solar installs are scheduled since they involve gas, venting, or roof work.",
      },
      {
        q: "Do you service solar water heaters?",
        a: "Yes. Solar water heating is one of our specialties and has been for decades — we install, repair, and service systems throughout Volusia County.",
      },
    ],
    featured: true,
  },
  {
    slug: "re-piping",
    title: "Re-Piping",
    short: "Re-Piping",
    icon: "GitBranch",
    tagline: "Whole-home repipe for houses fighting old pipe.",
    metaTitle: "Whole House Re-Piping in DeLand & Orange City FL | Latow Brothers",
    metaDescription:
      "Whole-home re-piping in Orange City, DeLand & Deltona FL. Replace galvanized, polybutylene & failing copper with PEX or copper. Licensed since 1978. (386) 775-4422.",
    intro:
      "When you're patching a third leak in a year, you've stopped doing repairs and started making payments on a repipe. Older Central Florida homes with galvanized steel or polybutylene supply lines reach a point where replacing the system costs less than continuing to chase it — and we'll tell you when you're there.",
    includes: [
      "Whole-home re-piping in PEX or copper",
      "Galvanized steel pipe replacement",
      "Polybutylene replacement (common in 1978–1995 Florida homes)",
      "Failing or pinhole-leaking copper replacement",
      "Partial re-pipes for a single problem run",
      "Multi-family, apartment, and condo re-piping",
      "New shut-off valves and hose bibbs throughout",
      "Drywall access cuts kept minimal and patched-ready",
    ],
    signs: [
      {
        title: "Your home has polybutylene pipe",
        body: "Gray flexible pipe, common in Florida homes built between 1978 and 1995. It fails from the inside out with no warning, and many insurers now surcharge or decline coverage for it.",
      },
      {
        title: "Rusty water when a tap sits unused",
        body: "Discolored first-draw water is corroding galvanized pipe shedding into your supply. It only goes one direction from there.",
      },
      {
        title: "Repeat pinhole leaks in copper",
        body: "One pinhole is a repair. A second and third in the same year means the pipe wall has thinned system-wide and every run is on the same clock.",
      },
      {
        title: "Pressure keeps dropping as scale builds",
        body: "Galvanized pipe closes up from the inside with mineral scale. You can't clean it out — the internal diameter is simply gone.",
      },
    ],
    process: [
      {
        step: "Walk the house",
        body: "We map every run, identify pipe material and age, and find where access will be needed. You get a fixed written scope.",
      },
      {
        step: "Plan around your life",
        body: "Most homes are done in 2–4 days, and we sequence it so you're not without water overnight.",
      },
      {
        step: "Run new lines",
        body: "PEX or copper to Florida code, with new shut-offs at every fixture. Access cuts are kept small, straight, and easy to patch.",
      },
      {
        step: "Pressure test and inspect",
        body: "Full system pressure test, permit inspection where required, then a walkthrough of every new valve with you.",
      },
    ],
    faqs: [
      {
        q: "How long does a whole-house repipe take?",
        a: "Most single-family homes take 2–4 days depending on size, slab versus crawlspace, and number of bathrooms. You'll have water restored each evening.",
      },
      {
        q: "PEX or copper — which should I choose?",
        a: "PEX is more common now: it resists scale, handles Florida water chemistry well, installs with fewer access cuts, and costs less. Copper still has a place for exposed runs and specific applications. We'll explain the tradeoff for your house rather than pushing one.",
      },
      {
        q: "Do you patch the drywall?",
        a: "We keep access cuts minimal and clean so they're straightforward to patch. Ask us during the estimate and we'll be clear about exactly what's included in your scope.",
      },
      {
        q: "Will re-piping help me with homeowners insurance?",
        a: "Very often, yes — particularly replacing polybutylene or galvanized. Many Florida carriers rate a home better once documented copper or PEX supply lines are in. We provide documentation of the work.",
      },
    ],
    featured: true,
  },
  {
    slug: "sewer-lines-and-drains",
    title: "Sewer Lines & Drains",
    short: "Sewer & Drains",
    icon: "Waves",
    tagline: "Clear the clog. Then find out why it keeps happening.",
    metaTitle: "Drain Cleaning & Sewer Line Repair Orange City FL | Latow Brothers",
    metaDescription:
      "Drain cleaning, sewer line repair & camera inspection in Orange City, Deltona & DeLand FL. Root intrusion, recurring clogs, main line backups. Call (386) 775-4422.",
    intro:
      "Anybody can push a cable down a line and get the water moving again. The question worth answering is why that line clogged — because in Central Florida it's usually roots finding a joint, a belly holding water, or a section of old clay or Orangeburg pipe that's giving up.",
    includes: [
      "Drain cleaning — kitchen, bath, laundry, floor drains",
      "Main sewer line clearing and cabling",
      "Hydro-jetting for grease and heavy buildup",
      "Camera inspection to locate the actual cause",
      "Root intrusion clearing and repair",
      "Sewer line repair and section replacement",
      "Cleanout installation for easier future access",
      "Commercial grease line and floor drain service",
    ],
    signs: [
      {
        title: "More than one fixture is slow at the same time",
        body: "A single slow sink is local. Two or more fixtures backing up together means the problem is in the main line, past the branch — and it's going to get worse.",
      },
      {
        title: "Gurgling toilets or drains",
        body: "Air being forced back through the trap because water can't move past a blockage. It's usually the warning shot before a full backup.",
      },
      {
        title: "Sewer smell inside or in the yard",
        body: "Odor means the system isn't sealed or venting correctly, and a soft or unusually green patch of lawn over the sewer run means the line is leaking underground.",
      },
      {
        title: "It clogs again every few months",
        body: "Roots grow back and bellies keep collecting. Recurring clogs are a structural problem in the pipe, and a camera answers it in fifteen minutes.",
      },
    ],
    process: [
      {
        step: "Clear the line",
        body: "We get you flowing again first — cable or jet depending on what's in there.",
      },
      {
        step: "Camera the line",
        body: "On recurring problems we run a camera so you can see exactly what's happening instead of taking our word for it.",
      },
      {
        step: "Locate and quote",
        body: "If there's a break, belly, or root intrusion we mark the location and depth, then price the repair against continuing to clear it.",
      },
      {
        step: "Repair properly",
        body: "Section replacement or full line repair to code, with the yard put back the way we found it.",
      },
    ],
    faqs: [
      {
        q: "Do you camera the line?",
        a: "Yes, and on any recurring clog we recommend it. Guessing at what's inside a buried line costs more over time than fifteen minutes of camera work.",
      },
      {
        q: "What causes most sewer backups here?",
        a: "In Volusia County it's overwhelmingly tree roots finding joints in older clay or cast iron lines, followed by grease buildup and bellies in the pipe from settling sandy soil.",
      },
      {
        q: "Are those store-bought drain chemicals a problem?",
        a: "They rarely clear a real clog and they're hard on older pipe and on your fixtures. If a chemical hasn't worked after one try, stop — you're now sitting on a drain full of caustic liquid that makes the repair more dangerous.",
      },
      {
        q: "Can you install a cleanout?",
        a: "Yes. If your home lacks an accessible cleanout, adding one makes every future service call faster and cheaper. It's usually a smart investment on older properties.",
      },
    ],
  },
  {
    slug: "water-treatment",
    title: "Water Treatment",
    short: "Water Treatment",
    icon: "Droplets",
    tagline: "Built for Central Florida's hard, sulfur-heavy water.",
    metaTitle: "Water Softener & Filtration Install Deltona FL | Latow Brothers Plumbing",
    metaDescription:
      "Water softener, filtration & well water treatment in Deltona, Orange City & DeLand FL. Fix hard water, sulfur smell, iron staining. Licensed since 1978. (386) 775-4422.",
    intro:
      "Central Florida water is hard, frequently high in iron, and on well systems often carries that unmistakable sulfur smell. Left alone it scales up your water heater, stains fixtures orange, ruins laundry, and quietly shortens the life of every appliance you own that touches water.",
    includes: [
      "Water softener sizing, installation and service",
      "Whole-home filtration systems",
      "Iron and sulfur removal for well water",
      "Reverse osmosis drinking water systems",
      "Sediment and carbon filtration",
      "Well pressure tank and pump-side plumbing",
      "Water testing and honest system recommendations",
      "Salt-free conditioner options",
    ],
    signs: [
      {
        title: "White scale on fixtures and glassware",
        body: "Calcium and magnesium out of solution. The same layer is building inside your water heater and every appliance line right now.",
      },
      {
        title: "Rotten egg smell, especially in hot water",
        body: "Hydrogen sulfide, common on Volusia well systems. It's a treatable water chemistry problem, not something you have to live with.",
      },
      {
        title: "Orange or brown staining in sinks and toilets",
        body: "Iron. It stains porcelain, laundry, and driveways, and no amount of cleaning keeps up until the water itself is treated.",
      },
      {
        title: "Soap won't lather and skin feels filmy",
        body: "The classic hard water signature — you're using more soap and detergent than you need to, every single day.",
      },
    ],
    process: [
      {
        step: "Test your water",
        body: "Hardness, iron, pH, sulfur. City water and well water need genuinely different systems, and so do two wells a mile apart.",
      },
      {
        step: "Size the system",
        body: "Based on your actual hardness numbers and household usage. An undersized softener regenerates constantly; an oversized one wastes salt.",
      },
      {
        step: "Install and plumb it right",
        body: "Proper bypass valve, drain line, and placement so the system is serviceable and doesn't create a problem behind it.",
      },
      {
        step: "Set up and show you",
        body: "We program the regeneration cycle, verify treated output, and show you how to maintain it.",
      },
    ],
    faqs: [
      {
        q: "Do I need a softener on city water in Orange City?",
        a: "Most Volusia County municipal water is still measurably hard. It's less aggressive than well water, but a softener still protects your water heater and appliances. A test tells you whether it's worth it for your address.",
      },
      {
        q: "Will a softener remove the sulfur smell?",
        a: "Not by itself. Hydrogen sulfide needs specific treatment — usually aeration or an oxidizing filter ahead of the softener. This is a very common well setup here and we install it regularly.",
      },
      {
        q: "How much maintenance is a softener?",
        a: "Salt every month or two depending on usage and hardness, plus a service check annually. That's genuinely most of it.",
      },
      {
        q: "Can you service a system I already have?",
        a: "Yes. We service and repair existing softeners and filtration regardless of who installed them.",
      },
    ],
  },
  {
    slug: "new-construction",
    title: "New Construction",
    short: "New Construction",
    icon: "HardHat",
    tagline: "Rough-in through trim-out, on the builder's schedule.",
    metaTitle: "New Construction Plumbing Volusia County FL | Latow Brothers Plumbing",
    metaDescription:
      "New construction plumbing for residential & commercial builds in Orange City, DeLand & Volusia County FL. Rough-in, top-out, trim-out. Licensed CFC057023. (386) 775-4422.",
    intro:
      "We've been roughing in Central Florida buildings since 1978, which means we've worked with a lot of general contractors and we know that on a build, showing up on the day you said you would is most of the job. Residential and commercial, from a single custom home to multi-unit.",
    includes: [
      "Underground and slab rough-in",
      "Top-out — supply, DWV, and venting",
      "Trim-out and fixture setting",
      "Bathroom, kitchen, and laundry room plumbing",
      "Commercial restroom and utility plumbing",
      "Water heater and tankless installation on new builds",
      "Gas line rough-in where licensed",
      "Permit coordination and inspection scheduling",
    ],
    signs: [
      {
        title: "You need a sub who hits the schedule",
        body: "Plumbing sits on the critical path three separate times. A sub who slips takes framing, drywall, and finish down with them.",
      },
      {
        title: "You want the inspection to pass the first time",
        body: "We plumb to Florida code the first time. Failed inspections are schedule damage nobody budgets for.",
      },
      {
        title: "You're building custom and the plans keep evolving",
        body: "Fixture changes and layout revisions come with the territory. We'd rather adjust in rough-in than argue about it at trim.",
      },
      {
        title: "You need one plumber for the whole project",
        body: "Underground through trim with one licensed contractor means nobody's inheriting somebody else's rough-in.",
      },
    ],
    process: [
      {
        step: "Plan review and bid",
        body: "We take off from your plans and give you a real number with a real schedule, not a placeholder.",
      },
      {
        step: "Underground and rough-in",
        body: "Set and inspected before the slab pour, coordinated with your concrete date.",
      },
      {
        step: "Top-out",
        body: "Supply, waste, and vent run and pressure tested before drywall closes it up.",
      },
      {
        step: "Trim-out and final",
        body: "Fixtures set, water heater commissioned, final inspection scheduled and passed.",
      },
    ],
    faqs: [
      {
        q: "Do you work with general contractors?",
        a: "Constantly, and have for decades. A good part of our new construction work comes from GCs who've used us across multiple projects.",
      },
      {
        q: "Residential only, or commercial too?",
        a: "Both. We handle single-family, multi-family, and commercial builds across Volusia County and into Seminole.",
      },
      {
        q: "Do you pull the permits?",
        a: "Yes, we handle plumbing permits and coordinate inspections as part of the scope.",
      },
      {
        q: "How far out do you book?",
        a: "It depends on the season and the size of the project. Call (386) 775-4422 with your schedule and we'll give you an honest answer about whether we can hit it.",
      },
    ],
  },
  {
    slug: "solar-water-heating",
    title: "Solar Water Heating",
    short: "Solar Water Heating",
    icon: "Sun",
    tagline: "Free hot water from the one thing Florida has plenty of.",
    metaTitle: "Solar Water Heater Installation & Repair Volusia County FL | Latow Brothers",
    metaDescription:
      "Solar water heating installation and repair in Orange City, DeLand & Deltona FL. Cut water heating costs with Florida sun. Specialists since 1978. (386) 775-4422.",
    intro:
      "Water heating is usually the second-largest line on a Florida power bill, and this is a state with sun to spare. Solar water heating has been part of what we do for decades — long enough to have serviced systems we installed a generation ago, and long enough to be straight with you about what it will and won't save.",
    includes: [
      "Solar water heating system design and installation",
      "Solar collector panel mounting and plumbing",
      "Solar storage tank installation",
      "Existing solar system repair and troubleshooting",
      "Pump, controller, and sensor replacement",
      "Backup element and conventional tie-in",
      "Freeze protection setup for Central Florida cold snaps",
      "System inspection and performance check",
    ],
    signs: [
      {
        title: "Your solar system stopped making hot water",
        body: "Usually the pump, controller, or a failed sensor — not the collectors. Most solar systems we're called out to are repairable.",
      },
      {
        title: "You bought a home with an existing solar system",
        body: "Get it inspected before you rely on it. We check collectors, pump, controller, and tank, and tell you what condition you actually inherited.",
      },
      {
        title: "You want to cut the biggest slice of your power bill",
        body: "Water heating typically runs 14–18% of a Florida household's electricity. Solar is one of the few things that takes a real bite out of it.",
      },
      {
        title: "Your system predates 2005",
        body: "Older systems often have degraded collectors or an obsolete controller. Sometimes it's a cheap fix, sometimes a rebuild — we'll tell you which.",
      },
    ],
    process: [
      {
        step: "Site evaluation",
        body: "Roof orientation, shading, structure, and your hot water demand. Not every roof is a good candidate and we'll say so.",
      },
      {
        step: "System design",
        body: "Collector count and tank size sized to your household, with the right backup and freeze protection for Central Florida.",
      },
      {
        step: "Install",
        body: "Collectors mounted and flashed properly, storage tank plumbed and tied to your existing system, controller set up.",
      },
      {
        step: "Commission and monitor",
        body: "We verify performance under real conditions and show you what normal looks like so you'll notice if it drifts.",
      },
    ],
    faqs: [
      {
        q: "Does solar water heating actually work in Florida?",
        a: "It's one of the best applications for solar anywhere in the country. Central Florida has both the sun and the year-round hot water demand, which is why these systems have been common here for decades.",
      },
      {
        q: "What happens on cloudy days or a cold snap?",
        a: "Systems are installed with a conventional backup — electric element or a tie-in to your existing heater — so you never lose hot water. Freeze protection handles our occasional hard freezes.",
      },
      {
        q: "Can you repair a solar system you didn't install?",
        a: "Yes. We repair and service solar water heating regardless of the original installer or brand.",
      },
      {
        q: "How long do these systems last?",
        a: "Collectors commonly run 20+ years. Pumps, controllers, and sensors are the wear items and get replaced along the way — which is far cheaper than a new system.",
      },
    ],
  },
  {
    slug: "garbage-disposals",
    title: "Garbage Disposals",
    short: "Disposals",
    icon: "Cog",
    tagline: "Jammed, humming, leaking, or dead — usually a same-visit fix.",
    metaTitle: "Garbage Disposal Repair & Installation Orange City FL | Latow Brothers",
    metaDescription:
      "Garbage disposal repair, replacement and installation in Orange City, Deltona & DeLand FL. Jams, leaks, humming units. Licensed plumbers. Call (386) 775-4422.",
    intro:
      "A disposal that hums but won't turn is usually jammed, not dead. One that leaks is usually leaking from a specific joint that tells you whether it's a five-minute fix or a replacement. Either way it's a small job — and small jobs are exactly where a lot of homeowners get oversold.",
    includes: [
      "Disposal repair — jams, reset issues, humming units",
      "Garbage disposal replacement and new installation",
      "Removal of stuck objects (yes, including the silverware)",
      "Leak repair at the sink flange, discharge tube, and dishwasher inlet",
      "Drain line clearing behind the disposal",
      "Dishwasher drain connection",
      "Sink flange and mounting assembly replacement",
      "Sizing guidance for household usage",
    ],
    signs: [
      {
        title: "It hums but the blades don't move",
        body: "Classic jam. The motor is fine and it's getting power — something is wedged in the impeller. This is a fix, not a replacement.",
      },
      {
        title: "It's leaking underneath",
        body: "Where it leaks matters. The sink flange and discharge connection are repairable; a leak from the body seam means the housing has corroded through and the unit is done.",
      },
      {
        title: "It trips the reset button constantly",
        body: "Either a persistent partial jam or a motor on its way out. Repeated overload trips are worth diagnosing before it fails completely.",
      },
      {
        title: "Water backs up into the sink when it runs",
        body: "Usually the drain line downstream, not the disposal itself. Replacing the unit wouldn't fix it — clearing the line would.",
      },
    ],
    process: [
      {
        step: "Diagnose the actual failure",
        body: "Jam, seal, motor, or downstream drain — they look similar from above the sink and cost very different amounts.",
      },
      {
        step: "Repair when repair makes sense",
        body: "Jams, flange leaks, and discharge connections are repairs. We don't sell you a unit you don't need.",
      },
      {
        step: "Replace properly when it's done",
        body: "New mounting assembly, fresh plumber's putty on the flange, dishwasher knockout handled, proper discharge alignment.",
      },
      {
        step: "Test under load",
        body: "Run it with water and confirm no leaks at any joint before we pack up.",
      },
    ],
    faqs: [
      {
        q: "My disposal hums — do I need a new one?",
        a: "Almost certainly not. Humming with no rotation means power is reaching the motor and something is jamming the impeller. Clearing the jam and hitting the reset usually brings it right back.",
      },
      {
        q: "What shouldn't go down a disposal?",
        a: "Grease is the worst — it hardens downstream and builds a clog nobody can see. Also avoid fibrous material (celery, corn husks), coffee grounds, eggshells, pasta and rice, and bones.",
      },
      {
        q: "How long should a disposal last?",
        a: "Eight to fifteen years depending on the unit and how it's used. Horsepower and build quality make a real difference over that span.",
      },
      {
        q: "Can you connect my dishwasher to it?",
        a: "Yes — and if it's a new disposal, the knockout plug has to be removed first. That's the single most common reason a new dishwasher backs up after installation.",
      },
    ],
  },
  {
    slug: "sump-pumps",
    title: "Sump Pumps",
    short: "Sump Pumps",
    icon: "ArrowUpFromLine",
    tagline: "The one piece of equipment that only matters when it's raining.",
    metaTitle: "Sump Pump Installation & Repair Volusia County FL | Latow Brothers Plumbing",
    metaDescription:
      "Sump pump installation, repair & testing in Orange City, Deltona, DeBary & Enterprise FL. Protect against Florida storm flooding. Licensed since 1978. (386) 775-4422.",
    intro:
      "Florida's water table sits high, our storms drop water fast, and a sump pump is the only thing standing between that and your floor. It's also the one piece of equipment in the house that can quietly fail and give you no indication until the exact moment you need it.",
    includes: [
      "Sump pump installation, primary and backup",
      "Sump pump repair and float switch replacement",
      "Battery backup systems for power outages",
      "Sump basin installation and drainage tie-in",
      "Discharge line repair, rerouting, and freeze/clog prevention",
      "Check valve replacement",
      "Pre-storm-season testing and service",
      "High-water alarm installation",
    ],
    signs: [
      {
        title: "It runs constantly, or never runs at all",
        body: "Continuous running usually means a stuck float or an undersized pump. Never running during heavy rain means it isn't working and you don't know it yet.",
      },
      {
        title: "Grinding, rattling, or unusual noise",
        body: "Worn impeller or failing motor bearings. It's a warning with a limited window before the pump stops entirely.",
      },
      {
        title: "There's water in the pit that isn't going anywhere",
        body: "The pump isn't triggering or isn't moving water. Could be the float, the impeller, or a blocked discharge line.",
      },
      {
        title: "You have no backup and no alarm",
        body: "Florida storms take the power out. A primary pump on grid power alone is a pump that's offline during exactly the storm that mattered.",
      },
    ],
    process: [
      {
        step: "Evaluate the situation",
        body: "Water volume, pit condition, discharge routing, and whether the existing pump is correctly sized for what it's being asked to do.",
      },
      {
        step: "Size it correctly",
        body: "An undersized pump runs constantly and burns out early. An oversized one short-cycles. Both fail sooner than they should.",
      },
      {
        step: "Install with the discharge done right",
        body: "Proper check valve, discharge routed well away from the foundation, and a basin that actually drains to the pit.",
      },
      {
        step: "Test and recommend a backup",
        body: "We test under real water load. On properties where flooding means real damage, we'll recommend battery backup and an alarm.",
      },
    ],
    faqs: [
      {
        q: "How often should a sump pump be tested?",
        a: "Test it yourself a couple of times a year — pour a bucket of water in the pit and confirm it kicks on and clears. Do it before hurricane season starts, not during.",
      },
      {
        q: "How long do sump pumps last?",
        a: "Seven to ten years typically, less if it runs frequently. If yours is approaching that and you've never replaced it, plan ahead rather than finding out during a storm.",
      },
      {
        q: "Do I need a battery backup?",
        a: "In Florida, if a flooded space would mean real damage — yes. Our worst flooding arrives with the storms most likely to take out power, which is precisely when a grid-only pump stops.",
      },
      {
        q: "Where should the discharge go?",
        a: "Well away from the foundation and not toward a neighbor's property. Discharging too close just recirculates the same water back into the pit.",
      },
    ],
  },
  {
    slug: "commercial-plumbing",
    title: "Commercial Plumbing",
    short: "Commercial",
    icon: "Building2",
    tagline: "Keeping Volusia County businesses open.",
    metaTitle: "Commercial Plumbing Services Orange City & Volusia County FL | Latow Brothers",
    metaDescription:
      "Commercial plumbing for restaurants, retail, offices & multi-family in Orange City, DeLand, Deltona & Sanford FL. Licensed CFC057023, serving business since 1978.",
    intro:
      "When a restaurant's grease line backs up or an office loses its restrooms, the cost isn't the repair — it's the hours you're closed. We've serviced Central Florida businesses since 1978 and we schedule commercial work around your operation, not the other way around.",
    includes: [
      "Commercial repairs, service, and maintenance",
      "Restaurant plumbing — grease lines, floor drains, prep sinks",
      "Multi-unit and apartment building plumbing",
      "Commercial restroom fixtures, flush valves, and repairs",
      "Backflow prevention and testing coordination",
      "Commercial water heater install and service",
      "Commercial new construction and tenant build-out",
      "Preventive maintenance programs",
    ],
    signs: [
      {
        title: "A plumbing problem can close your doors",
        body: "Restaurants, salons, medical offices, and childcare all have plumbing tied directly to their ability to legally operate. Downtime is the real cost.",
      },
      {
        title: "You manage multiple units or properties",
        body: "One licensed plumber who already knows your buildings beats calling whoever answers each time something goes wrong.",
      },
      {
        title: "You're doing a tenant build-out",
        body: "Converting a space to restaurant or medical use means real plumbing scope, and doing it to code the first time keeps your opening date.",
      },
      {
        title: "You're only calling when something breaks",
        body: "Grease lines and commercial fixtures are predictable. Scheduled maintenance is meaningfully cheaper than an emergency during service hours.",
      },
    ],
    process: [
      {
        step: "Scope it around your hours",
        body: "We look at the work and figure out how to do it with the least disruption to your operation.",
      },
      {
        step: "Quote in writing",
        body: "Clear scope and price so you can approve it, expense it, and plan around it.",
      },
      {
        step: "Execute cleanly",
        body: "Licensed work, code compliant, with the site kept safe and presentable while customers are in the building.",
      },
      {
        step: "Document and follow up",
        body: "You get documentation for your records, plus a maintenance recommendation so the same thing doesn't happen again next quarter.",
      },
    ],
    faqs: [
      {
        q: "Can you work outside of our business hours?",
        a: "We schedule commercial work to minimize disruption wherever we can. Talk to the office at (386) 775-4422 about your operating hours and we'll work out the timing.",
      },
      {
        q: "Do you handle property management accounts?",
        a: "Yes. We work with property managers and multi-unit owners across Volusia County on both service and scheduled maintenance.",
      },
      {
        q: "Are you licensed and insured for commercial work?",
        a: "Yes — CFC057023 and CFC057024, fully licensed and insured, and we've been doing commercial work in Central Florida since 1978.",
      },
      {
        q: "Do you offer maintenance agreements?",
        a: "We do, and for restaurants and multi-unit properties they usually pay for themselves. Call the office and we'll build one around your property.",
      },
    ],
  },
];

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
