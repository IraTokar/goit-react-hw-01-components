import { StatisticsWrap, Title, List, Item, Label, Percentage } from './Statistics.styled'
import { getRandomHexColor } from './getRandomHexColor'


const Statistics = ({ stats, title }) => {
    return (
        <StatisticsWrap>
            <Title>{title}</Title>

            <List>
                {stats.map(stat =>{
                    return (
                        <Item key={stat.id} style = {{backgroundColor: getRandomHexColor()}}>
                            <Label >{stat.label}</Label>
                            <Percentage >{stat.percentage}%</Percentage>
                        </Item>
                    )
                    }
                    )}
            </List>
        </StatisticsWrap>
    )
}

export default Statistics;