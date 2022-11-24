import Button from 'react-bootstrap/Button';

export const ItemCount = ({ count, handleCount }) => {
  return (
    <div className="flex mt-10 w-4/5 bg-gray-200 rounded">
      <Button
        onClick={() => handleCount("minus")}
        className="flex justify-center items-center p-2 w-2/5 h-full bg-gray-800 text-black"
      >
        -
      </Button>
      <span
        id="counter"
        className="flex flex-1 justify-center items-center mx-4 font-bold"
      >
        {count}
      </span>
      <Button
        onClick={() => handleCount("plus")}
        className="flex justify-center items-center p-2 w-2/5 h-full bg-gray-800 text-black"
      >
        +
      </Button>
    </div>
  );
};

