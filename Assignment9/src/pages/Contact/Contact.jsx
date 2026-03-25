import { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Alert } from '@mui/material';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>Contact Us</Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Have a question? We'd love to hear from you.
      </Typography>

      <Paper elevation={2} sx={{ p: 4 }}>
        {submitted ? (
          <Alert severity="success">Thanks! We'll be in touch soon.</Alert>
        ) : (
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Name" name="name" value={form.name} onChange={handleChange} required fullWidth />
            <TextField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required fullWidth />
            <TextField label="Message" name="message" value={form.message} onChange={handleChange} required fullWidth multiline rows={4} />
            <Button type="submit" variant="contained" size="large">Send Message</Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}