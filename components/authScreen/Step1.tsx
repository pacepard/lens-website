import Button from "@/components/authScreen/Button";

export default function Step1() {
  return (
    <main className="flex flex-col justify-between h-screen p-6">
      <div className="flex-1 space-y-6">
        <h2 className="text-xl font-semibold">
          Stay Informed, Stay Empowered Everyday.
        </h2>
        <p className="text-gray-600">
          Skip the rumours. Access easy-to-read verified government policies
          directly from official sources.
        </p>
      </div>
      <Button href="/step2">Next</Button>
    </main>
  );
}
