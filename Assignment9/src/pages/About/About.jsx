import { Container, Typography, Box, Paper, Grid } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>About Us</Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        JobPortal connects talented professionals with top employers across industries.
      </Typography>

      <Grid container spacing={3}>
        {[
          { title: 'Our Mission', body: 'To simplify the job search process and empower every professional to find meaningful work.' },
          { title: 'Our Vision', body: 'A world where every person is in the right role, and every company has the talent it needs to thrive.' },
          { title: 'Our Values', body: 'Transparency, inclusivity, and innovation guide everything we do.' },
        ].map((item) => (
          <Grid item xs={12} md={4} key={item.title}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">{item.body}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}