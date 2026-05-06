export default function AdminReviewsPage() {
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
          <h1 className="text-4xl font-bold">Admin Reviews</h1>

          <p className="mt-4 leading-8 text-neutral-700">
            For now, approve or reject reviews directly in Supabase by changing
            the review status to approved, rejected, or pending.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            Later, this page can become a full review approval dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}