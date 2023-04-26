import Link from "next/link";

function AmazonEbook() {
  return (
    <section className="pt-5 pb-5 rounded-4" id="sec1">
      <div className="container">
        <h1 className="text-center text-uppercase text-dark fw-bolder" style={{textDecoration: "underline", textDecorationColor: "orangered", textDecorationThickness: "6px"}}>
          AMAZON BOOK PUBLISH OF OUR FOUNDER
        </h1>
        <div class="header">
          <p>
            To: Dear Clients,
            <br />
            From: Tausif Sheikh (Founder - LoveLace Innovations)
            <br />
          </p>
          <p class="set-text">
            I am thrilled to announce the publication of my latest React
            TypeScript handbook and ebook on Amazon!,
            <br />
            <br />
            This Handbook and Ebbok has been a labor of love, and I am so
            excited to share it with you. As my valued clients, I wanted to
            offer you access to this handbook and ebook,
            <br />
            <br />
            which I believe will provide you with valuable insights and
            information on how to build robust and scalable web applications
            using React and TypeScript.
            <br />
            <br />
            This resource will equip you with the knowledge and tools you need
            to stay ahead of the curve and build modern, high-performance web
            applications that meet your business goals.
            <br />
            <br />
            I hope that you find this handbook and ebook useful and informative,
            and I look forward to hearing your feedback. As always, if you have
            any questions or need any assistance, please do&apos; hesitate to
            reach out to me. Thank you for your continued trust and support.
            <br /> <br />
            Best regards, 
            Sincerely,
            <br />
            Tausif Sheikh <br/>
            Senior Software Engineer, <br />
            7 Years of Experience, <br />
            Founder - LoveLace Innovations.
          </p>
        </div>
        <div className="text-center mt-5">
          <Link href="/" className="custom-btn btn-14 mx-auto text-uppercase">
            React TypeScript Book Link
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AmazonEbook;
