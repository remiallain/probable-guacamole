import { useState } from "react"
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function Playground() {
    const [history, setHistory] = useState<{ from: 'user' | 'ai', message: string | JSX.Element }[]>([]);
    const [question, setQuestion] = useState<string>('');

    const answer: { [key: string]: string | JSX.Element } = {
        'bigard': <iframe className="w-full" src='https://yewtu.be/embed/dXAd5H8DNKw?autoplay=1'/>,
        'shlaa': <iframe className="w-full" src='https://yewtu.be/embed/dXAd5H8DNKw?autoplay=1'/>,
        'caca': <iframe className="w-full" src="https://www.youtube.com/embed/81oXvFti73Y?si=Dmjt7wLz2x9CT6eQ&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>,
        'poop': <iframe className="w-full" src="https://www.youtube.com/embed/81oXvFti73Y?si=Dmjt7wLz2x9CT6eQ&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>,
        'shit': <iframe className="w-full" src="https://www.youtube.com/embed/81oXvFti73Y?si=Dmjt7wLz2x9CT6eQ&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>,
        'chiotte': <iframe className="w-full" src="https://www.youtube.com/embed/nUuFKtl9ajk?si=2uMQcBqOiZGuuBPE&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />,
        'wc': <iframe className="w-full" src="https://www.youtube.com/embed/nUuFKtl9ajk?si=2uMQcBqOiZGuuBPE&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
    }

    const historyItem = (from: 'user' | 'ai', message: string | JSX.Element) => {
        if (from === 'user') {
            return (<div className="flex justify-end">
                <div className="flex-col text-end">
                    <Alert className="rounded w-fit">
                        <AlertDescription>
                            {message}
                        </AlertDescription>
                    </Alert>
                    <small>You</small>
                </div>
            </div>)
        }

        return (<div className="flex justify-start">
            <div className="flex-col">
                <Alert className="rounded bg-amber-50 w-fit">
                    <AlertDescription>
                        {message}
                    </AlertDescription>
                </Alert>
                <small>Chiotte<b>GPT</b></small>
            </div>
        </div>)
    }

    const displayHistory = () => {
        const messages = history.map((h) => historyItem(h.from, h.message));

        if (history.length > 0 && history[history.length - 1].from !== 'ai') {
            messages.push(historyItem('ai', 'Searching ...'));
        }

        return messages.reverse();
    }

    const addToHistory = (from: 'ai' | 'user', message: string | JSX.Element) => {
        setHistory((h) => [...h, { from: from, message: message }])
    }

    const ask = () => {
        setHistory([])
        addToHistory('user', question);
        // wait 1 sec
        setTimeout(() => {

            for (const key in answer) {
                if (question.toLowerCase().includes(key)) {
                    addToHistory('ai', answer[key]);
                    return;
                }
            }

            addToHistory('ai', 'I don\'t know yet, maybe try with something I like and for what I\'m trained for ?');


        }, 1000);
    }

    const onTextEnter = (e: { key: string; preventDefault: () => void; }) => {
        if (e.key === 'Enter' && question.trim().length > 0) {
            e.preventDefault();
            ask();
            setQuestion('');
        }
    }

    return <div className="max-w-[600px] mx-auto">
        <p>The best and fastest AI. No bullshit, only shit.</p>
        <Textarea value={question} onKeyDown={onTextEnter} onChange={(e) => setQuestion(e.target.value)} className="mb-4 rounded border-neutral-300 shadow text-neutral-500" rows={3} style={{ resize: 'none' }} placeholder="Ask me anything, then hit [Enter]" />
        {displayHistory()}
    </div>
}