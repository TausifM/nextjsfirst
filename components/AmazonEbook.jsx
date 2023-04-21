import Link from "next/link";

function AmazonEbook() {
  return (
    <section className="pt-7 bg-white pb-5">
      <div className="container">
        <h4 className="text-center fs-3 text-uppercase text-dark fw-bold">
          AMAZON BOOK PUBLISH OF OUR FOUNDER
        </h4>
        <p className="mx-auto text-center fs-lg-1 fs-md-1 w-lg-75 text-black">
          Dear clients, I am thrilled to announce the publication of my latest
          React TypeScript handbook and ebook on Amazon! This project has been a
          labor of love, and I am so excited to share it with you. As my valued
          clients, I wanted to offer you access to this handbook and ebook,
          which I believe will provide you with valuable insights and
          information on how to build robust and scalable web applications using
          React and TypeScript. This resource will equip you with the knowledge
          and tools you need to stay ahead of the curve and build modern,
          high-performance web applications that meet your business goals. I
          hope that you find this handbook and ebook useful and informative, and
          I look forward to hearing your feedback. As always, if you have any
          questions or need any assistance, please do&apos; hesitate to reach out
          to me. Thank you for your continued trust and support. Best regards,
          [Your name]
        </p>
      </div>
      <div className="text-center mt-5">
        <Link href="/" className="custom-btn btn-14 mx-auto text-uppercase">
          React TypeScript Book Link
        </Link>
      </div>
    </section>
  );
}

export default AmazonEbook;
