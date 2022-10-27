import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="bg-primary flex items-center justify-between text-white px-40 py-24">
        <div className="flex flex-col space-y-12">
          <div>
            <h2>Build</h2>
            <p>Development company, 2022 </p>
          </div>
          <div>
            <p>Site design-⏰ Alarm</p>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <Link href="">service1</Link>
          <Link href="">service2</Link>
          <Link href="">service3</Link>
          <Link href="">service4</Link>
          <div className="flex space-x-2">
            <picture>
              <img src="/IG.png" alt="icon" />
            </picture>
            <picture>
              <img src="/fb.png" alt="icon" />
            </picture>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <Link href="">About us</Link>
          <Link href="">Services</Link>
          <Link href="">Projects</Link>
          <Link href="">Contact</Link>
        </div>
        <div className="space-y-4">
          <Link href="">Get in touch</Link>
          <p>60 Manor Station St. Fairport,</p>
          <p>NY 14450</p>
          <p>708-708-708</p>
          <p>sales@buildit.site</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
