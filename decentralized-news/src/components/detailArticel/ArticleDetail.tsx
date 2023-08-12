import ArticleDetailSceleton from "./ArticleDetailSceleton.tsx";
import MainLayout from "../MainLayout.tsx";

function ArticleDetail() {
    const article =
        {
            articleId: "1234",
            title: "Sudden earthquake in the middle east",
            author: "Clair Lacrosse",
            authorOrigin: "New York Times",
            date: "Aug 11, 2023",
            tag: "politics",
            text: "A man who posted violent threats against President Joe Biden and other officials online was shot dead during an FBI raid on Wednesday.\n" +
                "Agents were attempting to serve an arrest warrant on Craig Robertson at his home in Utah, just hours ahead of a planned visit to the state by Mr Biden.\n" +
                "\n" +
                "A criminal complaint said Robertson posted threats on Facebook against Mr Biden and a prosecutor pursuing criminal charges against Donald Trump.\n" +
                "The FBI declined to give more details.\n" +
                "\n" +
                "The raid happened at about 06:15 local time in Provo, about 40 miles (65 km) south of Salt Lake City.\n" +
                "A criminal complaint outlined messages that Robertson made on Facebook including pictures of guns and threats to kill Mr Biden and Alvin Bragg, the Manhattan district attorney leading an investigation into a hush-money payment by Mr Trump to an adult film star.\n" +
                "\n" +
                "According to the complaint, other messages targeted US Attorney General Merrick Garland and New York Attorney General Letitia James.\n" +
                "Robertson posted on Facebook: \"I hear Biden is coming to Utah. Digging out my old ghillie suit and cleaning the dust off the M24 sniper rifle.\"\n" +
                "It was just one of dozens of violent messages and photos of weapons posted on two of Robertson's Facebook accounts.The complaint said Robertson came to the attention of federal agents in March after he posted a threat against Mr Bragg on Truth Social, the social network owned by Mr Trump. The company alerted the FBI's National Threat Operations Center.\n" +
                "\n" +
                "FBI agents then visited the suspect, who told them that the post was a \"dream\" and ended the conversation by saying: \"We're done here! Don't return without a warrant!\"\n" +
                "Later posts by Robertson referenced his encounter with the agents, showed him in camouflage used by snipers, and repeatedly threatened public officials.\n" +
                "\n" +
                "The messages continued as late as Tuesday, when he posted: \"Perhaps Utah will become famous this week as the place a sniper took out Biden the Marxist.\"\n" +
                "Mr Biden will make his first visit to Utah as president on Thursday, with a visit to a veterans' hospital and a fundraising event in Park City.\n"
        }
    return (
        <MainLayout>
            <ArticleDetailSceleton title={article.title} author={article.author} authorOrigin={article.authorOrigin}
                                   date={article.date} tag={article.tag} text={article.text}/>
        </MainLayout>
    );
}

export default ArticleDetail;
