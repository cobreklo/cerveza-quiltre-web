import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const AgeVerification = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem("age-verified");
    if (!isVerified) {
      setOpen(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem("age-verified", "true");
    setOpen(false);
  };

  const handleReject = () => {
    window.location.href = "https://google.cl";
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="bg-background/95 backdrop-blur-md border-border">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-center">
            ¿Eres mayor de edad?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-muted-foreground">
            Debes tener 18 años o más para ingresar a este sitio.
            El consumo de alcohol es exclusivo para mayores de edad.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2">
          <Button 
            variant="destructive" 
            onClick={handleReject}
            className="w-full sm:w-auto"
          >
            No soy mayor
          </Button>
          <AlertDialogAction 
            onClick={handleVerify}
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Soy mayor de 18
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AgeVerification;
