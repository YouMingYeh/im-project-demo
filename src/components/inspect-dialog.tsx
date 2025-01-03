import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Maximize2 } from 'lucide-react'

interface InspectDialogProps {
    title: string
    children: React.ReactNode
}

export function InspectDialog({ title, children }: InspectDialogProps) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">全螢幕
                    <Maximize2 />
                </Button>
            </DialogTrigger>
            <DialogContent className={"w-screen h-screen m-0 max-w-full overflow-auto"}>
                <DialogHeader className="flex flex-row items-center justify-between">
                    <DialogTitle>{title}</DialogTitle>
                    {/* <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsFullScreen(!isFullScreen)}
                    >
                        {isFullScreen ? <Minimize2 /> : <Maximize2 />}
                    </Button> */}
                </DialogHeader>
                <div className={"w-full h-full"}>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}

