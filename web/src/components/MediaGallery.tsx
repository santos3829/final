import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import foot1 from "../Photos/foot1.png";
import foot2 from "../Photos/foot2.png";
import foot3 from "../Photos/foot3.png";
import foot4 from "../Photos/foot4.png";
import bag from "../Photos/bag.mp4";
import tution from "../Photos/tutiion.mp4";
import w1 from "../Photos/w1.png";
import w2 from "../Photos/w2.png";
import w3 from "../Photos/w3.png";
import w4 from "../Photos/w4.png";
import t  from "../Photos/t.png";
import b from "../Photos/b.png";

interface MediaItem {
  id: number;
  type: "image" | "video";
  url: string;
  thumbnail: string;
  category: string;
}

const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 1,
    type: "image",
    url: foot1,
    thumbnail: foot1,
    category: "Image",
  },
  {
    id: 2,
    type: "image",
    url: foot2,
    thumbnail: foot2,
    category: "Image",
  },
  {
    id: 3,
    type: "image",
    url: foot3,
    thumbnail: foot3,
    category: "Image",
  },
  {
    id: 4,
    type: "image",
    url: foot4,
    thumbnail: foot4,
    category: "Image",
  },
  {
    id: 5,
    type: "video",
    url: bag,
    thumbnail: b,
    category: "Video",
  },
  {
    id: 6,
    type: "video",
    url: tution,
    thumbnail: t,
    category: "Video",
  },
  {
    id: 7,
    type: "image",
    url: w1,
    thumbnail: w1,
    category: "Image",
  },
  {
    id: 8,
    type: "image",
    url: w2,
    thumbnail: w2,
    category: "Image",
  },
  {
    id: 9,
    type: "image",
    url: w3,
    thumbnail: w3,
    category: "Image",
  },
  {
    id: 10,
    type: "image",
    url: w4,
    thumbnail: w4,
    category: "Image",
  },
];

const categories = ["All", ...Array.from(new Set(MEDIA_ITEMS.map((item) => item.category)))];

export const MediaGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? MEDIA_ITEMS
      : MEDIA_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Categories Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 px-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="hover-glow"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Media Grid Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="media-item group"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.thumbnail}
                  alt={`${item.category} - Media item ${item.id}`}
                  className="w-full h-48 md:h-64 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Dialog Section */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-full w-[90%] lg:w-[80%] xl:w-[60%]">
          {selectedMedia?.type === "image" && (
            <img
              src={selectedMedia.url}
              alt={`${selectedMedia.category} - Media item ${selectedMedia.id}`}
              className="w-full h-auto rounded-md"
            />
          )}
          {selectedMedia?.type === "video" && (
            <video
              src={selectedMedia.url}
              controls
              className="w-full h-auto rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
