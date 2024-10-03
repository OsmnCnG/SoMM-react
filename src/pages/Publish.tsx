import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ImagePlus } from "lucide-react"

export function Publish() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="flex justify-start items-center min-h-screen p-4">
            <Card className="w-[600px] h-[800px]">
                <CardHeader>
                    <CardTitle>Yeni Post Oluştur</CardTitle>
                    <CardDescription>Yeni bir post paylaşın.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5 h-[200px]">
                                <Label htmlFor="photo">Fotoğraf</Label>
                                <div className="flex items-center space-x-4 h-[400px]">
                                    <Label
                                        htmlFor="photo-upload"
                                        className="cursor-pointer flex items-center justify-center w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400"
                                    >
                                        {selectedImage ? (
                                            <img src={selectedImage} alt="Uploaded" className="w-full h-full object-cover rounded-lg" />
                                        ) : (
                                            <ImagePlus className="w-10 h-10 text-gray-400" />
                                        )}
                                    </Label>
                                    <Input
                                        id="photo-upload"
                                        type="file"
                                        className="hidden"
                                        onChange={handleImageUpload}
                                        accept="image/*"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="caption">Açıklama</Label>
                                <Textarea id="caption" placeholder="Gönderiniz hakkında bir şeyler yazın..." />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="app">Uygulama</Label>
                                <Select>
                                    <SelectTrigger id="app">
                                        <SelectValue placeholder="Uygulama seçin" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="instagram">Instagram</SelectItem>
                                        <SelectItem value="facebook">Facebook</SelectItem>
                                        <SelectItem value="twitter">Twitter</SelectItem>
                                        <SelectItem value="tiktok">TikTok</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">İptal</Button>
                    <Button>Paylaş</Button>
                </CardFooter>
            </Card>
        </div>

    )
}