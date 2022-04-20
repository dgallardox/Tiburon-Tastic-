import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function CardLayout({children}) {
  return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {children}
        </CardContent>
      </Card>
  )
}