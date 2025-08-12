import { OneInputForm } from "@/components/molecules/one-input-form/one-input-form";
import { useTodolist } from "@/modules/todolist/use-todolist";
import { useCallback } from "react";

export function TodoList() {

    const { items, addItem } = useTodolist();;
    const onSubmit = useCallback((value: string) => {
        addItem(value);
    }, [addItem]);


    return <div>
        <ol>
            {
                items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ol>
        <OneInputForm onSubmit={onSubmit} />
    </div>
}
