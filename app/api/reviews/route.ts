import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const event = body.event?.trim();
    const review = body.review?.trim();

    if (!name || !event || !review) {
      return NextResponse.json(
        { error: "Name, event, and review are required." },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin.from("reviews").insert([
      {
        name,
        event,
        review,
        status: "pending",
      },
    ]);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}