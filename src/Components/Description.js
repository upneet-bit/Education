import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Description(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
          <h3>Education in India</h3>
      <Container>
      Education in India is primarily provided by public schools (controlled and funded by the government at three levels: central, state and local) and private schools. Under various articles of the Indian Constitution, free and compulsory education is provided as a fundamental right to children aged 6 to 14. The approximate ratio of public schools to private schools in India is 7:5.
    In the 2011 Census, about 73% of the population was literate, with 81% for males and 65% for females. National Statistical Commission surveyed literacy to be 77.7% in 2017–18, 84.7% for male and 70.3% for female.[5] This compares to 1981 when the respective rates were 41%, 53% and 29%. In 1951 the rates were 18%, 27% and 9%.[6] India's improved education system is often cited as one of the main contributors to its economic development.[7] Much of the progress, especially in higher education and scientific research, has been credited to various public institutions. While enrollment in higher education has increased steadily over the past decade, reaching a Gross Enrollment Ratio (GER) of 26.3% in 2019,[8] there still remains a significant distance to catch up with tertiary education enrolment levels of developed nations,[9] a challenge that will be necessary to overcome in order to continue to reap a demographic dividend from India's comparatively young population.
    At the primary and secondary level, India has a large private school system complementing the government run schools, with 29% of students receiving private education in the 6 to 14 age group.[10] Certain post-secondary technical schools are also private. The private education market in India had a revenue of US$450 million in 2008, but is projected to be a US$40 billion market.[11]
    As per the Annual Status of Education Report (ASER) 2012, 96.5% of all rural children between the ages of 6-14 were enrolled in school. This is the fourth annual survey to report enrollment above 96%. India has maintained an average enrolment ratio of 95% for students in this age group from year 2007 to 2014. As an outcome the number of students in the age group 6-14 who are not enrolled in school has come down to 2.8% in the year academic year 2018 (ASER 2018).[12] Another report from 2013 stated that there were 229 million students enrolled in different accredited urban and rural schools of India, from Class I to XII, representing an increase of 2.3 million students over 2002 total enrolment, and a 19% increase in girl's enrolment.[13] While quantitatively India is inching closer to universal education, the quality of its education has been questioned particularly in its government run school system. While more than 95 percent of children attend primary school, just 40 percent of Indian adolescents attend secondary school (Grades 9-12). Since 2000, the World Bank has committed over $2 billion to education in India. Some of the reasons for the poor quality include absence of around 25% of teachers every day.[14] States of India have introduced tests and education assessment system to identify and improve such schools.
    Although there are private schools in India, they are highly regulated in terms of what they can teach, in what form they can operate (must be a non-profit to run any accredited educational institution) and all the other aspects of operation. Hence, the differentiation of government schools and private schools can be misleading.[16]
    In January 2019, India had over 900 universities and 40,000 colleges.[17] In India's higher education system, a significant number of seats are reserved under affirmative action policies for the historically disadvantaged Scheduled Castes and Scheduled Tribes and Other Backward Classes. In universities, colleges, and similar institutions affiliated to the federal government, there is a maximum 50% of reservations applicable to these disadvantaged groups, at the state level it can vary. Maharashtra had 73% reservation in 2014, which is the highest percentage of reservations in India
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
