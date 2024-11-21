"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ItemTradingGame from "@components/ItemTrandingGame/ItemTradingGame";
import { ItemTrandingGames, TrandingGamesProps } from "@types";

const TrandingGames: FC<TrandingGamesProps> = ({ items }) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="min-w-[1170px] mx-auto flex flex-col gap-[57px]">
      <div className="flex justify-between items-center">
        <h2 className="rubik-font text-[31px] font-bold leading-[58px]">
          Currently Trending Games
        </h2>
        <button
          onClick={handleToggle}
          className="w-[140px] py-[10px] bg-[#FFFFFF1C] hover:bg-[#ffffff1f] active:bg-[#ffffff2a] rounded-[10px]"
        >
          {showAll ? "Show less" : "Show all"}
        </button>
      </div>
      <div className="max-w-[1170px] flex justify-between flex-wrap gap-y-[20px]">
        <AnimatePresence>
          {items
            .slice(0, showAll ? items.length : 4)
            .map((item: ItemTrandingGames, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <ItemTradingGame
                  image={item.image}
                  followers={item.followers}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TrandingGames;
