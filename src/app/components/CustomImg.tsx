import Image from "next/image";

interface iconData {
	fileName: string;
	fileHeight: number;
	fileWidth: number;
	fileAlt: string;
}

export default function CustomImg({
	fileName,
	fileHeight,
	fileAlt,
	fileWidth,
}: iconData) {
	return <Image src={`/${fileName}`} width={30} height={30} alt={fileAlt} />;
}
