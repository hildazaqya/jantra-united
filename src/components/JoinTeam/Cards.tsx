import Image from "next/image";
/**
 * Reusable Card Component
 * @param {Object} props - Properties passed to the component
 * @param {string} props.title - Title for the card
 * @param {string} props.imageSrc - Path to the image icon
 * @param {string} props.altText - Alt text for the image
 * @param {string} props.bgColor - Background color for the card
 * @param {string} props.borderColor - Border color for the card
 * @param {React.ReactNode} props.children - Content to be rendered inside the card
 */

interface CardProps {
      title: string;
      imageSrc: string;
      altText: string;
      bgColor: string;
      borderColor: string;
      children: React.ReactNode;
}

export function Card({ title, imageSrc, altText, bgColor, borderColor, children }: CardProps) {
      return (
        <div className={`border ${borderColor} ${bgColor} p-7 rounded-3xl`}>
          <div className="flex flex-row items-center gap-5">
            <Image src={imageSrc} alt={altText} width={50} height={50} className="w-[50px]" />
            <h5 className="text-white font-semibold text-2xl">{title}</h5>
          </div>
          {children && <div className="mt-4 text-white">{children}</div>}
        </div>
      );
    }
