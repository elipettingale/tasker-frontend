import {
  FunctionComponent,
  ReactNode,
  useState,
  Children,
  cloneElement,
} from "react";
import Icon from "../../../Icon/Icon";
import styles from "./Repeater.module.css";
import { v4 as uuidv4 } from "uuid";
import Button from "../../../Button/Button";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

interface RepeaterProps {
  label: string;
  name: string;
  children: ReactNode;
}

const Repeater: FunctionComponent<RepeaterProps> = ({
  label,
  name,
  children,
}) => {
  const [items, setItems] = useState([uuidv4()]);

  const addItem = () => {
    setItems((previous) => {
      return [...previous, uuidv4()];
    });
  };

  const removeItem = (item) => {
    const index = items.indexOf(item);

    setItems((previous) => {
      let clone = [...previous];
      clone.splice(index, 1);

      return clone;
    });
  };

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    setItems((previous) => {
      let clone = [...previous];
      const [removed] = clone.splice(source.index, 1);
      clone.splice(destination.index, 0, removed);

      return clone;
    });
  };

  return (
    <div className={styles.Wrapper}>
      {label ? <span className={styles.Label}>{label}</span> : null}

      <div className={styles.Repeater}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={"lists"}>
            {(provided, snapshot) => (
              <div ref={provided.innerRef}>
                {items.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={provided.draggableProps.style}
                        className={styles.Item__Wrapper}
                      >
                        <div className={styles.Item}>
                          <div
                            className={styles.RemoveItem}
                            onClick={() => removeItem(item)}
                          >
                            <Icon name="trash" />
                          </div>
                          {Children.map(children, (child) => {
                            return cloneElement(child, {
                              name: `${name}[${item}][${child.props.name}]`,
                            });
                          })}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <div className={styles.AddItem} onClick={addItem}>
        <Icon name="plus" />
      </div>
    </div>
  );
};

export default Repeater;
