type TextCustomProps = {
  text: string;
};

export default function TextCustom({ text }: TextCustomProps) {
  return (
    <>
    <h1 className="text-5xl text-orange-500 font-black stroke ">{text}</h1>
    </>
  );
}
