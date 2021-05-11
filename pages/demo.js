import * as Sentry from '@sentry/nextjs';

function DemoPage() {
  const triggerSentryError = () => {
    throw new Error('You asked for it!');
  };

  return (
    <div>
      <p>This page will result in 500 server error in 50% of cases.</p>
      <button onClick={triggerSentryError}>Click here to trigger client sentry error</button>
    </div>
  );
}

export async function getServerSideProps() {
  const r = Math.random();
  if (r > 0.5) {
    Sentry.captureMessage(`Just a message for ${r} error`);
    throw new Error(`Random ${r} error on server side`);
  }

  return {
    props: {},
  };
}

export default DemoPage;
