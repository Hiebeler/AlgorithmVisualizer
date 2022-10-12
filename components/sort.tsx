import { useState } from 'react'
import { Bar } from './bar';
const Sort = (props: any) => {

    const [list, setList] = useState(initializeList(15));

    function initializeList(lenght: number): number[] {
        let randomList: number[] = [];
        for (let i = 0; i < lenght; i++) {
            let randomValue = Math.round(Math.random() * (100 - 1 + 1)) + 1;
            if (!randomList.includes(randomValue)) {
                randomList.push(randomValue);
            }
            else {

                while (randomList.includes(randomValue)) {
                    randomValue = Math.round(Math.random() * (100 - 1 + 1)) + 1;
                }
                randomList.push(randomValue);
            }
        }
        return randomList;
    }

    function StartBubbleSort() {
        console.log("startbubblesort")
        let listCopy: number[] = [...list];
        listCopy[0] = 4;
        setList(listCopy);
    }


    return (
        <div className='h-[90vh] flex flex-col justify-between items-center'>
            <div>
                <button className='bg-slate-700' onClick={StartBubbleSort}>Start</button>
            </div>
            <div className='flex flex-row gap-1 w-full h-full items-end pt-20'>
                {
                    list.map((item) => {
                        return (
                            <Bar key={item} height={item.toString()} />
                        )
                    })
                }

            </div>
        </div>
    );

}

export default Sort;