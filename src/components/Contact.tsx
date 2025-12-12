import { socials } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Contact = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact .content',
        start: 'top 90%',
      },
      delay: 0.2,
    });

    tl.from('#contact-heading', {
      opacity: 0,
      yPercent: 200,
      ease: 'power1.inOut',
    });

    const splitByWord = new SplitText('.animated', {
      type: 'words',
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact .content',
        start: 'top 55%',
      },
      delay: 0.2,
    });

    tl2.from(splitByWord.words, {
      opacity: 0,
      xPercent: -100,
      stagger: 0.05,
      duration: 0.3,
      ease: 'power1.inOut',
    });
  }, []);
  return (
    <footer id="contact">
      <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />

      <div className="content">
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col">
            <h2 id="contact-heading">Where to Find Us</h2>
            <p className="mt-[30px] text-[18px] animated">Visit our store</p>
            <h3 className="mt-5 animated">456, Raq Blvd. #404, Los Angeles, CA 90210</h3>
          </div>

          <div className="flex flex-col items-center gap-y-2.5 animated">
            <p>Contact us</p>
            <h3 className="m-0">(555) 987-6543</h3>
            <input type="email" readOnly={true} value="hello@jsmcocktail.com" />
          </div>

          <div className="flex flex-col items-center animated">
            <p>Open every day</p>
            <p className="mt-5">Mon-Thu : 11:00am - 12am</p>
            <p className="mt-2.5">Fri : 11:00am - 2am</p>
            <p className="mt-2.5">Sat : 9:00am - 2am</p>
            <p className="mt-2.5">Sat : 9:00am - 2am</p>
            <p className="mt-2.5">Sun : 9:00am - 1 am</p>
          </div>

          <div>
            <h3>Socials</h3>

            <div className="flex-center gap-5">
              {socials.map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
