import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
  Button,
  Divider,
} from "@nextui-org/react"

interface MealCardProps {
  imgSrc: string | null
  title: string
  description: string
  videoUrl: string
  handleAddToFavorite: () => void
}

export const MealCard = ({
  imgSrc,
  title,
  description,
  videoUrl,
  handleAddToFavorite,
}: MealCardProps) => {
  return (
    <Card className="w-[300px]" shadow="md">
      <CardHeader className="flex-col gap-4">
        {imgSrc && (
          <Image
            height={200}
            width={200}
            radius="sm"
            alt={title}
            src={imgSrc}
          />
        )}
        <div className="flex flex-col">
          <p className="text-xl font-bold">{title}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p>{description.slice(0, 100).concat("...")}</p>
      </CardBody>
      <Divider />
      <CardFooter className="flex-row-reverse gap-4">
        <Link href={videoUrl} target="_blank" rel="noopener noreferrer">
          Watch on Youtube
        </Link>
        <Button
          variant="ghost"
          color="primary"
          radius="md"
          onClick={handleAddToFavorite}
        >
          Add to favorite
        </Button>
      </CardFooter>
    </Card>
  )
}
