import { useState, useEffect } from "react";
import Logo from "@/public/assets/Alkem_logo.png"
import { useRouter } from "next/navigation";
import productsData from "@/public/data.json";

const ProductCard = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [techs, setTechs] = useState([]);
    const [active, setActive] = useState('');
    const router = useRouter();

    const [product, setProduct] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                setCategories(data.categories)
                setProducts(data.products);
                setTechs(data.tech)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const cat = categories.map((item,index) => {
        return (
            <p key={index} className="inline-block bg-gray-300 p-2 mx-2 my-1 rounded-xl hover:bg-gray-400 hover:text-white duration-300">
                {item}
            </p>
        )
    })

    const techStack = (item) => {
        return item.tech.map((techItem, index) => {
            return (
                <span key={index} className="m-2 text-sm">{techItem}</span>
            );
        });
    };

    let text = "";
    
    const handleFilter = (item) => {
        if (active === item) {
            setActive('');
            text =``;
            router.push("")
        } else {
            setActive(item);
            text =`?tech=${item}`;
        }

        console.log(text)
        router.push(text, { scroll: false })

    }

    return (
        <section id="projects" className="bg-white dark:bg-gray-900 py-10 px-12 max-w-[1320px] mx-auto">
            <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">Projects</h1>
            <div id="tags">
                <p className="inline-block bg-gray-300 p-2 mx-2 my-1 rounded-xl hover:bg-gray-400 hover:text-white duration-300">
                    All
                </p>
                {cat}
                {techs.map((item, index) => {
                    return (
                        <button key={index} onClick={() => { handleFilter(item) }}
                            className="inline-block bg-gray-300 p-2 mx-2 my-1 rounded-xl hover:bg-gray-400 hover:text-white duration-300">
                            {item}
                        </button>
                    )
                })}

            </div>
            <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {products.map((item) => {
                    return (
                        <div key={item.id} className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 duration-300 relative">
                            <div className="absolute h-full w-full rounded-2xl bg-gray-400 rotate-6 z-0"></div>
                            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 duration-300 p-4">
                                <img id="proj-img" src={item.image} className="rounded-t h-72 w-full object-cover" />
                                <div id="proj-tags" className="absolute left-6 top-6">
                                    <p className="bg-gray-200 inline-block p-2 rounded-xl">{item.category}</p>
                                </div>
                                <div id="proj-details" className="py-2">
                                    <p className="text-xl text-center font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                                        {item.title}
                                    </p>
                                    <div className="leading-5 my-4 text-gray-500 dark:text-gray-400">
                                        <p className="absolute bg-white font-bold p-2 rounded left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            Tech Stack
                                        </p>
                                        <div className="text-center border-2 rounded-xl pt-3">
                                            {techStack(item)}
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="overflow-hidden h-15">
                                            <span className="font-bold">Desc:</span> {item.desc}
                                        </p>
                                    </div>
                                </div>
                                <div id="social-links" className="border-t flex items-center justify-between py-2">
                                    <a href={`/product/${item.slug}`} target="_blank" className="bg-gray-300 p-2 mx-4 rounded-lg hover:bg-gray-400 hover:text-white duration-300">Learn More</a>
                                    <a href="#" target="_blank" className="bg-violet-500 text-white font-white p-2 mx-4 rounded-lg hover:bg-violet-600  duration-300">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProductCard;
