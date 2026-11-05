import { NextResponse } from "next/server";
import { resolvePlan } from "@/data/plans";
import { resolvePlanPayMode } from "@/lib/paycontrol";

/** Public: how this plan is paid (no secrets / link ids). */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const plan = resolvePlan(searchParams.get("plan"), searchParams.get("connections"));
  const mode = resolvePlanPayMode(plan.id);

  return NextResponse.json({
    ok: true,
    planId: plan.id,
    connections: plan.connections,
    expectedAmount: plan.price,
    mode,
    needsAmountInput: mode === "flex" || mode === "open",
  });
}
