import { OneInputForm } from "@/components/molecules/one-input-form/one-input-form";
import { useTodolist } from "@/modules/todolist/use-todolist";
import { useCallback } from "react";

export function TodoList() {

    const onSubmit = useCallback(() => {

    }, []);

    const { items } = useTodolist();

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
