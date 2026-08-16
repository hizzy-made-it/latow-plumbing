import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { orpc } from "../lib/api";

/** Public callback form submission. */
export function useSubmitLead() {
  return useMutation(orpc.leads.submit.mutationOptions());
}

/** Admin — password gate check. */
export function useVerifyPassword() {
  return useMutation(orpc.leads.verify.mutationOptions());
}

/** Admin — full lead list, newest first. */
export function useLeads(password: string, enabled: boolean) {
  return useQuery({
    ...orpc.leads.list.queryOptions({ input: { password } }),
    enabled: enabled && password.length > 0,
    refetchInterval: 60_000,
  });
}

/** Admin — pipeline counters. */
export function useLeadStats(password: string, enabled: boolean) {
  return useQuery({
    ...orpc.leads.stats.queryOptions({ input: { password } }),
    enabled: enabled && password.length > 0,
    refetchInterval: 60_000,
  });
}

export function useUpdateLead() {
  const qc = useQueryClient();
  return useMutation({
    ...orpc.leads.update.mutationOptions(),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: orpc.leads.list.key() });
      qc.invalidateQueries({ queryKey: orpc.leads.stats.key() });
    },
  });
}

export function useDeleteLead() {
  const qc = useQueryClient();
  return useMutation({
    ...orpc.leads.remove.mutationOptions(),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: orpc.leads.list.key() });
      qc.invalidateQueries({ queryKey: orpc.leads.stats.key() });
    },
  });
}
