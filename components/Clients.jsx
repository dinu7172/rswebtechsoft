import Marquee from "react-fast-marquee";
import Image from "next/image"
import logo_img from "@/public/assets/Alkem_logo.png"
import MovingCards, { InfiniteMovingCards } from "./MovingCards";


const companies = [
    { name: "Alkem Labs", logo: logo_img },
    { name: "balkem Labs", logo: logo_img },
    { name: "chalkem Labs", logo: logo_img },
    { name: "calkem Labs", logo: logo_img },
    { name: "halkem Labs", logo: logo_img },
    { name: "chalkm Labs", logo: logo_img },
]
const reviews = [
    { id: 1, name: "Dinesh", message: "Hi my name is Dinesh Kailash Maourya and I live in Mumbai and completed my degree in computer science from mumbai university.", logo: logo_img },
    { id: 2, name: "Dinesh", message: "Hi my name is Dinesh Kailash Maourya and I live in Mumbai and completed my degree in computer science from mumbai university.", logo: logo_img },
    { id: 3, name: "Dinesh", message: "Hi my name is Dinesh Kailash Maourya and I live in Mumbai and completed my degree in computer science from mumbai university.", logo: logo_img },
    { id: 4, name: "Dinesh", message: "Hi my name is Dinesh Kailash Maourya and I live in Mumbai and completed my degree in computer science from mumbai university.", logo: logo_img },
    { id: 5, name: "Dinesh", message: "Hi my name is Dinesh Kailash Maourya and I live in Mumbai and completed my degree in computer science from mumbai university.", logo: logo_img },
    { id: 6, name: "Dinesh", message: "Hi my name is Dinesh Kailash Maourya and I live in Mumbai and completed my degree in computer science from mumbai university.", logo: logo_img }

]
const reviewComponent = reviews.map((item) => {
    return (
        <div >
                           <div class="bg-white shadow-lg rounded-lg p-6 w-[384px] mx-auto">
                    <div class="flex items-center justify-start gap-5">
                        <img src={item.logo} alt="Logo" class="w-16 h-16 rounded-full" />
                        <h2 class="text-xl font-semibold text-gray-800">{item.name}</h2>

                    </div>
                    <div class="mt-4">
                        <p class="mt-2 text-gray-600">{item.message}</p>
                    </div>
                </div>
            
        </div>
        )
})
// reviews.map((item) => {
//     console.log("Key:- " + item.id + " Name:- " + item.name + "  Message:- " + item.message)
// })
const com = companies.map((item) => {
    return (
        <div className="m-10" key={item.name}>
            <div className="logo">
                <Image
                    src={item.logo}
                    width={70}
                    height={40}
                />
            </div>
            <div className="name">
                {item.name}
            </div>

        </div>
    )
})

const Clients = () => {
    return (
        <div>
            <h2 className="text-center font-bold text-2xl sm:text-4xl">Our Customers</h2>
            <div className="flex justify-center">
                <Marquee
                    valocity={50}
                    duration={10000}
                    background="transparent"
                    height="100px"
                    width="70%"
                    axis="X"
                    align="center"
                    reverse={true}
                    velocity={25}>
                    <div className="p-4 flex">
                        {com}
                    </div>

                </Marquee>
            </div>

            <div className="reviews">
                <p className="text-4xl font-bold text-center">And What they say about Us</p>
                <div className="reviews flex">
                <Marquee width="50%" gradientWidth={500} className="w" behavior="scroll" direction="right">

                    {reviewComponent}
                    </Marquee>
                </div>
            </div>

        </div>
    )
}

export default Clients