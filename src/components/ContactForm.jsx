import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  return (
    <div>
      <form className="w-[544px] h-[380px]">
        <div className="flex flex-col gap-[8px] my-2">
          <label>
            Instagram Link<span className="text-gray-500">(Optional)</span>
          </label>
          <input
            type="text"
            placeholder="Eg. John doe"
            className="border border-gray-200 max-w-[496px] p-1"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label>
            Youtube Link<span className="text-gray-500">(Optional)</span>
          </label>
          <input
            type="email"
            placeholder="Eg. John@xyz.com"
            className="border border-gray-200 max-w-[496px] p-1"
          />
        </div>
        <div className="flex justify-end ]">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="mr-2 text-sm text-white bg-[#3E84F8] p-2 font-semibold rounded-lg  mt-3"
          >
            back
          </button>
          <button
            className="mr-14 text-sm text-white bg-[#3E84F8] p-2 font-semibold rounded-lg  mt-3"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
