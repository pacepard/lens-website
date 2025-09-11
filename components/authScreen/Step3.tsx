import Button from "@/components/authScreen/Button";

export default function Step3() {
  return (
    <main className="flex flex-col justify-between h-screen p-6">
      <div className="flex-1 space-y-6">
        <h2 className="text-xl font-semibold">
          Stay Ahead. Take Action. Together with Your Community.
        </h2>
        <p className="text-gray-600">
          Get real-time alerts on policy changes and share hyperlocal
          information with your community.
        </p>
      </div>
      <Button href="/login">Let's Go</Button>
    </main>
  );
}
