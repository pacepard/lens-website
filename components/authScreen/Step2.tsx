import Button from "@/components/authScreen/Button";

export default function Step2() {
  return (
    <main className="flex flex-col justify-between h-screen p-6">
      <div className="flex-1 space-y-6">
        <h2 className="text-xl font-semibold">
          Skip the Noise, Policies Made Simple for Everyone.
        </h2>
        <p className="text-gray-600">
          Turn confusing legal jargon into clear summaries, videos, and
          infographics you understand.
        </p>
      </div>
      <Button href="/step3">Next</Button>
    </main>
  );
}
