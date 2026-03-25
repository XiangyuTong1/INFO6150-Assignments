import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';

const stats = [
  { icon: <SearchIcon fontSize="large" color="primary" />, label: 'Open Positions', value: '120+' },
  { icon: <BusinessIcon fontSize="large" color="primary" />, label: 'Companies', value: '40+' },
  { icon: <PeopleIcon fontSize="large" color="primary" />, label: 'Candidates Hired', value: '500+' },
];

export default function Home() {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{
        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
        color: 'white',
        py: { xs: 10, md: 16 },
        textAlign: 'center',
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Find Your Dream Job Today
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Browse hundreds of openings from top companies and launch your career.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/jobs"
              sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: '#f0f0f0' } }}
            >
              Browse Jobs
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/companies"
              sx={{ color: 'white', borderColor: 'white' }}
            >
              View Companies
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Stats */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Grid container spacing={3} justifyContent="center">
          {stats.map((s) => (
            <Grid item xs={12} sm={4} key={s.label}>
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                {s.icon}
                <Typography variant="h4" fontWeight={700}>{s.value}</Typography>
                <Typography color="text.secondary">{s.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}