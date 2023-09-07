import { useNavigate } from "react-router-dom";

const BasicForm = () => {
    const navigate = useNavigate();
  return (
    <div>
      <form className="w-[544px] h-[380px]">
        <div className="flex flex-col gap-[8px] my-2">
          <label>Enter Name</label>
          <input
            type="text"
            placeholder="Eg. John doe"
            className="border border-gray-200 max-w-[496px] p-1"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label>Enter Email</label>
          <input
            type="email"
            placeholder="Eg. John@xyz.com"
            className="border border-gray-200 max-w-[496px] p-1"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label>Enter Phone</label>
          <input
            type="tel"
            placeholder="91 1234567890"
            className="border border-gray-200 max-w-[496px] p-1"
          />
        </div>
        <div className="flex justify-end ]">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(+1)
            }}
            className="mr-14 text-sm text-white bg-[#3E84F8] p-2 font-semibold rounded-lg left-6 mt-3"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
