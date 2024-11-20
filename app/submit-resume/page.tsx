import SubmitResumeForm from './SubmitResumeForm';

export default function SubmitResumePage() {
  return (
    <main className="container mx-auto mt-10 max-w-lg">
      <h1 className="text-3xl font-bold text-center">Submit Your Resume</h1>
      <p className="text-center text-gray-600 mt-2">
        Please fill out the form below to submit your resume.
      </p>
      <div className="mt-8">
        <SubmitResumeForm />
      </div>
    </main>
  );
}
