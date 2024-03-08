import Marquee from "react-fast-marquee";

const MovingCards = (item) => {
    return (
        <div >
            <Marquee className="w" behavior="scroll" direction="right">
                <div class="bg-white shadow-lg rounded-lg p-6 w-[384px] mx-auto">
                    <div class="flex items-center justify-start gap-5">
                        <img src="https://source.unsplash.com/300x300?logo" alt="Logo" class="w-16 h-16 rounded-full" />
                        <h2 class="text-xl font-semibold text-gray-800">{item.name}</h2>

                    </div>
                    <div class="mt-4">
                        <p class="mt-2 text-gray-600">{item.message}</p>
                    </div>
                </div>
            </Marquee>
        </div>
    )
}

export default MovingCards