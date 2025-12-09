import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../../constants";

const Coctails = () => {
    
    useGSAP(() => {
       const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#cocktails',
            start: 'top 30%',
            end: 'bottom 80%',
            scrub: true,
        }
       });

       tl.from('#c-left-leaf', {x: -100, y: 100})
       .from('#c-right-leaf', {x: 100, y: 100})
    }, []);

    return (
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" className="left-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" className="right-leaf" id="c-right-leaf" />
            <div className="list">
                <div className="popular">
                    <h2>Most Popular cocktails</h2>
                    <ul>
                        {cocktailLists.map((cocktail) => (
                            <li key={cocktail.name}>
                                <div className="md:me-28">
                                    <h3>{cocktail.name}</h3>
                                    <p>{cocktail.country} | {cocktail.detail}</p>
                                </div>
                                <span>- {cocktail.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="loved">
                    <h2>Most popular beer:</h2>
                    <ul>
                        {mockTailLists.map((cocktail) => (
                            <li key={cocktail.name}>
                                <div className="md:me-28">
                                    <h3>{cocktail.name}</h3>
                                    <p>{cocktail.country} | {cocktail.detail}</p>
                                </div>
                                <span>- {cocktail.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Coctails;