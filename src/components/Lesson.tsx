
import classNames from "classnames";
import { format, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";


interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{slug: string}>()

    const isLessonAvailableAt = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • ' d ' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })

    const isActiveLesson = slug === props.slug;


    


    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',{
                'bg-green-500': isActiveLesson,
            })}>
                <header className="flex items-center justify-between">

                    {isLessonAvailableAt ? (
                        <span className={classNames("flex gap-2 items-center text-sn  font-medium", {
                            'text-white': isActiveLesson,
                            'text-blue-500': !isActiveLesson
                        })}>
                            <CheckCircle size={20}/>
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="flex gap-2 items-center text-sn  font-medium text-orange-500">
                            <Lock size={20}/>
                            Em breve
                        </span>
                    )} 

                    <span className={classNames("text-xs rounded py-[0.125rem] px-2 text-white border  front-bold",{
                        'border-white': isActiveLesson,
                        'border-green-300': !isActiveLesson
                    })}>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>

                </header>

                <strong className={classNames(" mt-5 block",{
                    'text-white': isActiveLesson,
                    'text-gray-200': !isActiveLesson
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}