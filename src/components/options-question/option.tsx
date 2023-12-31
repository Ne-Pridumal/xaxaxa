import { DragIndicator } from "@mui/icons-material";
import { Chip } from "@mui/material";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

export type TOption = {
  id: string;
  label: string;
  moveAnswer: (dragIndex: string, hoverIndex: string) => void;
};

export const Option = ({ id, label, moveAnswer }: TOption) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "card",
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = id;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveAnswer(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => {
      return { id };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <Chip
      label={label}
      ref={ref}
      data-handler-id={handlerId}
      icon={<DragIndicator />}
    />
  );
};
