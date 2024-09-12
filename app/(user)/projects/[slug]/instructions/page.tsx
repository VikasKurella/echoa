import CopyButton from '@/components/copy-button';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  if (!params.slug) return <div>Invalid Project ID</div>;
  if (!process.env.WIDGET_URL) return <div>Missing Widget URL</div>;

  return (
    <div>
      <h1 className='text-xl font-bold'>Start collecting Feedback</h1>
      <p className='text-lg text-secondary-foreground'>
        Embed the code in your website
      </p>
      <div className='bg-blue-950 p-6 rounded-md mt-6 relative'>
        <code className='text-white'>
          {`<feedback-widget project='${params.slug}'></feedback-widget>`}
          <br />
          {`<script src='${process.env.WIDGET_URL}/widget.umd.js'></script>`}
        </code>
        <CopyButton
          text={`<feedback-widget project='${params.slug}'></feedback-widget>
          <script src='${process.env.WIDGET_URL}/widget.umd.js'></script>`}
        />
      </div>
    </div>
  );
}
