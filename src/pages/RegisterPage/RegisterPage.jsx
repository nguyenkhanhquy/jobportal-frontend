import RegisterForm from "../../components/forms/RegisterForm/RegisterForm";
import Public_layout_cover from "/images/public_layout_cover.jpg";

const RegisterPage = () => {
    return (
        <div className="flex h-screen">
            {/* Bên trái: Form đăng ký chiếm 5/9 */}
            <div
                className="flex h-screen w-full flex-col items-center justify-center overflow-y-scroll bg-white p-8 md:w-5/9"
                style={{
                    scrollbarWidth: "none", // Ẩn thanh cuộn cho Firefox
                    msOverflowStyle: "none", // Ẩn thanh cuộn cho IE và Edge
                }}
            >
                <style>
                    {`
                    /* Ẩn thanh cuộn cho Chrome, Safari, Edge */
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    `}
                </style>
                <div className="no-scrollbar w-full max-w-md">
                    <RegisterForm />
                </div>
            </div>

            {/* Bên phải: Hình ảnh minh họa chiếm 4/9 */}
            <div className="hidden h-screen w-4/9 md:flex">
                <img src={Public_layout_cover} alt="Banner" className="h-full w-full object-cover" />
            </div>
        </div>
    );
};

export default RegisterPage;
