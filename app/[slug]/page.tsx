export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="container py-5">
      <h1 className="mb-3 text-capitalize">{params.slug}</h1>
      <p>This page is under construction.</p>
    </div>
  );
}
