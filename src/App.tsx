import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledHero = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFE03D',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(4),
}));

const ChevronLeft = styled(Box)({
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  width: 0,
  height: 0,
  borderTop: '200px solid transparent',
  borderBottom: '200px solid transparent',
  borderLeft: '100px solid white',
  opacity: 0.3,
});

const ChevronRight = styled(Box)({
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  width: 0,
  height: 0,
  borderTop: '200px solid transparent',
  borderBottom: '200px solid transparent',
  borderRight: '100px solid white',
  opacity: 0.3,
});

const LogoText = styled(Typography)({
  fontFamily: '"Press Start 2P", "Courier New", monospace',
  fontSize: '72px',
  fontWeight: 900,
  color: '#8B2BE2',
  textTransform: 'uppercase',
  letterSpacing: '4px',
  textShadow: '6px 6px 0px #000000',
  marginBottom: '32px',
  textAlign: 'center',
  '@media (max-width: 768px)': {
    fontSize: '36px',
    letterSpacing: '2px',
    textShadow: '3px 3px 0px #000000',
  },
});

const ContentBox = styled(Box)({
  border: '6px solid #000000',
  outline: '12px solid #FF1493',
  outlineOffset: '-6px',
  backgroundColor: '#FFE03D',
  padding: '48px',
  maxWidth: '800px',
  boxShadow: '8px 8px 0px rgba(0, 0, 0, 0.3)',
  marginBottom: '48px',
  '@media (max-width: 768px)': {
    padding: '24px',
    outline: '8px solid #FF1493',
  },
});

const SectionTitle = styled(Typography)({
  fontFamily: '"Press Start 2P", "Courier New", monospace',
  fontSize: '32px',
  fontWeight: 800,
  color: '#FFFFFF',
  backgroundColor: '#8B2BE2',
  textTransform: 'uppercase',
  padding: '16px 32px',
  textAlign: 'center',
  border: '4px solid #000000',
  boxShadow: '4px 4px 0px #000000',
  marginBottom: '32px',
  '@media (max-width: 768px)': {
    fontSize: '20px',
    padding: '12px 16px',
  },
});

const BodyText = styled(Typography)({
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: 1.6,
  color: '#1E0066',
  marginBottom: '24px',
  textAlign: 'center',
  '@media (max-width: 768px)': {
    fontSize: '16px',
  },
});

const PixelButton = styled(Button)({
  backgroundColor: '#8B2BE2',
  color: '#FFE03D',
  fontFamily: '"Press Start 2P", "Courier New", monospace',
  fontSize: '16px',
  fontWeight: 800,
  textTransform: 'uppercase',
  padding: '16px 32px',
  border: '4px solid #000000',
  borderRadius: 0,
  boxShadow: '6px 6px 0px #000000',
  transition: 'all 0.1s steps(2)',
  '&:hover': {
    backgroundColor: '#9D4EDD',
    transform: 'translate(2px, 2px)',
    boxShadow: '4px 4px 0px #000000',
  },
  '&:active': {
    transform: 'translate(4px, 4px)',
    boxShadow: '2px 2px 0px #000000',
  },
  '@media (max-width: 768px)': {
    fontSize: '12px',
    padding: '12px 24px',
  },
});

const SecondaryButton = styled(Button)({
  backgroundColor: '#FF1493',
  color: '#FFFFFF',
  fontFamily: '"Press Start 2P", "Courier New", monospace',
  fontSize: '16px',
  fontWeight: 800,
  textTransform: 'uppercase',
  padding: '16px 32px',
  border: '4px solid #000000',
  borderRadius: 0,
  boxShadow: '6px 6px 0px #000000',
  transition: 'all 0.1s steps(2)',
  marginLeft: '16px',
  '&:hover': {
    backgroundColor: '#E91E8C',
    transform: 'translate(2px, 2px)',
    boxShadow: '4px 4px 0px #000000',
  },
  '&:active': {
    transform: 'translate(4px, 4px)',
    boxShadow: '2px 2px 0px #000000',
  },
  '@media (max-width: 768px)': {
    fontSize: '12px',
    padding: '12px 24px',
    marginLeft: 0,
    marginTop: '16px',
  },
});

const FeaturesSection = styled(Box)({
  backgroundColor: '#8B2BE2',
  padding: '64px 24px',
  borderTop: '8px solid #000000',
  borderBottom: '8px solid #000000',
});

const FeatureCard = styled(Box)({
  border: '4px solid #000000',
  outline: '8px solid #FF1493',
  outlineOffset: '-4px',
  backgroundColor: '#FFE03D',
  padding: '32px',
  marginBottom: '24px',
  boxShadow: '6px 6px 0px #000000',
  '@media (max-width: 768px)': {
    padding: '24px',
    marginBottom: '16px',
  },
});

const FeatureTitle = styled(Typography)({
  fontFamily: '"Press Start 2P", "Courier New", monospace',
  fontSize: '20px',
  fontWeight: 800,
  color: '#8B2BE2',
  textTransform: 'uppercase',
  marginBottom: '16px',
  '@media (max-width: 768px)': {
    fontSize: '16px',
  },
});

const FeatureText = styled(Typography)({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: 1.5,
  color: '#1E0066',
  '@media (max-width: 768px)': {
    fontSize: '14px',
  },
});

function App() {
  return (
    <>
      <StyledHero>
        <ChevronLeft />
        <ChevronRight />
        
        <LogoText variant="h1">
          CODECARNIVAL
        </LogoText>

        <ContentBox>
          <SectionTitle variant="h2">
            VISION
          </SectionTitle>
          <BodyText>
            A community-driven platform where developers and designers compete by submitting creative projects—from absurd UI/UX designs to funny React components and original experiments. Inspired by the legendary 2017 Reddit "worst design" contest and React Bits.
          </BodyText>
          <BodyText sx={{ fontSize: '18px', fontWeight: 700, color: '#8B2BE2' }}>
            CodeCarnival is part hackathon, part meme culture, part portfolio builder.
            <br />
            We celebrate originality, humor, and creativity—not just technical correctness.
          </BodyText>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '32px',
            flexWrap: 'wrap',
            gap: '16px',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
              alignItems: 'center',
            }
          }}>
            <PixelButton variant="contained">
              JOIN NOW
            </PixelButton>
            <SecondaryButton variant="contained">
              BROWSE BATTLES
            </SecondaryButton>
          </Box>
        </ContentBox>
      </StyledHero>

      <FeaturesSection>
        <Container maxWidth="lg">
          <SectionTitle variant="h2" sx={{ backgroundColor: '#FFE03D', color: '#8B2BE2' }}>
            CORE FEATURES
          </SectionTitle>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: '24px' }}>
            <FeatureCard>
              <FeatureTitle>🏆 COMPETITIONS</FeatureTitle>
              <FeatureText>
                Active contests with countdown timers, past winners showcase, and themed challenges that push creative boundaries.
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>🚀 SUBMISSIONS</FeatureTitle>
              <FeatureText>
                Submit your wildest creations with repo links, screenshots, GIFs, and descriptions. Show off your unique vision.
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>⬆️ VOTING SYSTEM</FeatureTitle>
              <FeatureText>
                Upvote the most creative, downvote the boring. Transparent vote counts drive the leaderboards and fame.
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>👤 USER PROFILES</FeatureTitle>
              <FeatureText>
                Build your portfolio with badges, submission history, and links. Let your weird creativity shine through.
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>💬 COMMENTS</FeatureTitle>
              <FeatureText>
                Discussion threads under every submission. Roast, praise, or collaborate with the community.
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>📊 LEADERBOARDS</FeatureTitle>
              <FeatureText>
                Per-competition rankings and overall hall of fame. Climb to the top and claim your glory.
              </FeatureText>
            </FeatureCard>
          </Box>
        </Container>
      </FeaturesSection>

      <Box sx={{ 
        backgroundColor: '#FF1493', 
        padding: '64px 24px', 
        textAlign: 'center',
        borderTop: '8px solid #000000'
      }}>
        <Container maxWidth="md">
          <Typography sx={{
            fontFamily: '"Press Start 2P", "Courier New", monospace',
            fontSize: { xs: '24px', md: '36px' },
            fontWeight: 900,
            color: '#FFE03D',
            textShadow: '4px 4px 0px #000000',
            marginBottom: '24px',
            textTransform: 'uppercase',
          }}>
            READY TO GET WEIRD?
          </Typography>
          <BodyText sx={{ color: '#FFFFFF', marginBottom: '32px' }}>
            Join developers and designers who aren't afraid to break the rules, 
            challenge conventions, and create something wonderfully terrible.
          </BodyText>
          <PixelButton sx={{ backgroundColor: '#FFE03D', color: '#8B2BE2' }}>
            START YOUR JOURNEY
          </PixelButton>
        </Container>
      </Box>
    </>
  );
}

export default App;
