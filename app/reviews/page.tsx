"use client";

import { useState } from "react";

export default function ReviewsPage() {
  const [name, setName] = useState("");
  const [event, setEvent] = useState("");
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, event, review }),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error || "Something went wrong.");
      setLoading(false);
      return;
    }

    setMessage("Thanks! Your review was submitted for approval.");
    setName("");
    setEvent("");
    setReview("");
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-white px-6 py-16 text-neutral-900">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
          className="mb-8 inline-block text-sm text-neutral-500 hover:text-black"
        >
          ← Back to Home
        </a>

        <div className="rounded-3xl border p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Share your experience
          </p>

          <h1 className="mt-2 text-4xl font-bold">Leave a Review</h1>

          <p className="mt-4 max-w-2xl leading-8 text-neutral-700">
            Thanks for supporting Dr. Dynamo. Reviews are submitted for approval
            first and will only appear publicly after being reviewed.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-black"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Event where you saw Dr. Dynamo
              </label>
              <input
                type="text"
                required
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-black"
                placeholder="Festival, wedding, street performance, school event..."
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Your Review
              </label>
              <textarea
                required
                rows={7}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-black"
                placeholder="Tell others what your experience was like..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>

            {message && (
              <p className="text-sm text-neutral-600">{message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}