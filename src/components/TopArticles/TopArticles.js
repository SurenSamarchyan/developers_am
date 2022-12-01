import React from "react";
import EntryTile from "../Common/EntryTile";
import ContentGrid from "../Common/ContentGrid/ContentGrid";

const TopArticles = ({topArticles}) => {
	
	return(
		<ContentGrid cols={2}>

			{
				topArticles.map(article => (
					<EntryTile {...article} key={article.id}
					/>
				))
			}
		</ContentGrid>
	)
}

export default TopArticles;