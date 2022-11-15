import React from "react";
import StatisticLine from "./components/StatisticLine";

const Statistics = ({good, bad, neutral, all, average, positive}) => {

    return (
        <div>
            <table className="tg">
                <tbody>
                <tr>
                    <td className="tg-0lax">
                        Good
                    </td>
                    <td className="tg-0lax">
                        {good}
                    </td>
                </tr>
                <tr>
                    <td className="tg-0lax">
                        Bad
                    </td>
                    <td className="tg-0lax">
                        {bad}
                    </td>
                </tr>
                <tr>
                    <td className="tg-0lax">
                        Netural
                    </td>
                    <td className="tg-0lax">
                        {neutral}
                    </td>
                </tr>
                <tr>
                    <td className="tg-0lax">
                        All
                    </td>
                    <td className="tg-0lax">
                        {all}
                    </td>
                </tr>
                <tr>
                    <td className="tg-0lax">
                        Average
                    </td>
                    <td className="tg-0lax">
                        {average}
                    </td>
                </tr>
                <tr>
                    <td className="tg-0lax">
                        Positive
                    </td>
                    <td className="tg-0lax">
                        {positive}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Statistics