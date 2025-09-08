import { useState } from "react";
import { Calculator, DollarSign, Users, GraduationCap, Percent } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TuitionRates {
  [key: string]: {
    monthly: number;
    enrollment: number;
    materials: number;
  };
}

export default function TuitionCalculator() {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState(1);
  const [hasDiscount, setHasDiscount] = useState("");
  const [paymentPlan, setPaymentPlan] = useState("");
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const tuitionRates: TuitionRates = {
    infantil: {
      monthly: 35000, // 35.000 Kz
      enrollment: 15000, // 15.000 Kz
      materials: 8000, // 8.000 Kz
    },
    primario: {
      monthly: 45000, // 45.000 Kz
      enrollment: 20000, // 20.000 Kz
      materials: 12000, // 12.000 Kz
    },
    secundario: {
      monthly: 55000, // 55.000 Kz
      enrollment: 25000, // 25.000 Kz
      materials: 15000, // 15.000 Kz
    },
  };

  const calculateTotal = () => {
    if (!selectedLevel) return null;

    const rates = tuitionRates[selectedLevel];
    let monthlyFee = rates.monthly * numberOfChildren;
    let enrollmentFee = rates.enrollment * numberOfChildren;
    let materialsFee = rates.materials * numberOfChildren;

    // Aplicar descontos
    if (hasDiscount === "sibling" && numberOfChildren > 1) {
      // 15% desconto para irmãos
      monthlyFee = monthlyFee * 0.85;
    } else if (hasDiscount === "annual") {
      // 10% desconto para pagamento anual
      monthlyFee = monthlyFee * 0.90;
    }

    // Desconto no plano de pagamento
    if (paymentPlan === "quarterly") {
      monthlyFee = monthlyFee * 0.95; // 5% desconto trimestral
    } else if (paymentPlan === "semester") {
      monthlyFee = monthlyFee * 0.92; // 8% desconto semestral
    } else if (paymentPlan === "annual") {
      monthlyFee = monthlyFee * 0.88; // 12% desconto anual
    }

    const totalFirstMonth = monthlyFee + enrollmentFee + materialsFee;
    const totalAnnual = (monthlyFee * 10) + enrollmentFee + materialsFee;

    return {
      monthly: monthlyFee,
      enrollment: enrollmentFee,
      materials: materialsFee,
      firstMonth: totalFirstMonth,
      annual: totalAnnual,
    };
  };

  const results = calculateTotal();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-AO", {
      style: "currency",
      currency: "AOA",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Calculator className="text-primary mr-3" size={40} />
            <h2 className="text-4xl font-bold text-foreground">Calculadora de Mensalidades</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calcule facilmente os custos educacionais para o seu filho no Colégio Mara & Lú
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Formulário de Cálculo */}
          <Card className="card-hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <GraduationCap className="mr-2" />
                Configure o Cálculo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="level">Nível de Ensino</Label>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger data-testid="select-education-level">
                    <SelectValue placeholder="Selecione o nível de ensino" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="infantil">Educação Infantil (3-5 anos)</SelectItem>
                    <SelectItem value="primario">Ensino Primário (6-10 anos)</SelectItem>
                    <SelectItem value="secundario">Ensino Secundário (11-17 anos)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="children">Número de Filhos</Label>
                <div className="flex items-center space-x-4 mt-2">
                  <Users className="text-secondary" size={20} />
                  <Input
                    id="children"
                    type="number"
                    min="1"
                    max="10"
                    value={numberOfChildren}
                    onChange={(e) => setNumberOfChildren(parseInt(e.target.value) || 1)}
                    className="w-20"
                    data-testid="input-number-children"
                  />
                  <span className="text-muted-foreground">criança(s)</span>
                </div>
              </div>

              <div>
                <Label htmlFor="discount">Descontos Disponíveis</Label>
                <Select value={hasDiscount} onValueChange={setHasDiscount}>
                  <SelectTrigger data-testid="select-discount">
                    <SelectValue placeholder="Selecione se aplica algum desconto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Nenhum desconto</SelectItem>
                    <SelectItem value="sibling">Desconto Irmãos (15%)</SelectItem>
                    <SelectItem value="annual">Desconto Pagamento Anual (10%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="payment">Forma de Pagamento</Label>
                <Select value={paymentPlan} onValueChange={setPaymentPlan}>
                  <SelectTrigger data-testid="select-payment-plan">
                    <SelectValue placeholder="Selecione a forma de pagamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Mensal</SelectItem>
                    <SelectItem value="quarterly">Trimestral (-5%)</SelectItem>
                    <SelectItem value="semester">Semestral (-8%)</SelectItem>
                    <SelectItem value="annual">Anual (-12%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Resultados */}
          <Card className="card-hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-secondary">
                <DollarSign className="mr-2" />
                Resumo dos Custos
              </CardTitle>
            </CardHeader>
            <CardContent>
              {results ? (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Mensalidade</p>
                      <p className="text-2xl font-bold text-primary" data-testid="monthly-fee">
                        {formatCurrency(results.monthly)}
                      </p>
                    </div>
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Taxa de Matrícula</p>
                      <p className="text-2xl font-bold text-secondary" data-testid="enrollment-fee">
                        {formatCurrency(results.enrollment)}
                      </p>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">Material Escolar</p>
                    <p className="text-xl font-bold text-accent" data-testid="materials-fee">
                      {formatCurrency(results.materials)}
                    </p>
                  </div>

                  <Separator />

                  <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-lg">
                    <p className="text-lg font-semibold text-foreground mb-2">Total no Primeiro Mês</p>
                    <p className="text-3xl font-bold text-primary" data-testid="first-month-total">
                      {formatCurrency(results.firstMonth)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      (Inclui matrícula + material + mensalidade)
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-secondary/20 to-accent/20 p-6 rounded-lg">
                    <p className="text-lg font-semibold text-foreground mb-2">Total Anual Estimado</p>
                    <p className="text-3xl font-bold text-secondary" data-testid="annual-total">
                      {formatCurrency(results.annual)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      (10 mensalidades + matrícula + material)
                    </p>
                  </div>

                  <div className="text-center pt-4">
                    <Button 
                      onClick={() => {
                        const element = document.getElementById('contato');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-primary text-primary-foreground hover:bg-secondary pulse-glow"
                      data-testid="button-enroll-now"
                    >
                      <GraduationCap className="mr-2" size={20} />
                      Inscrever Agora
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Calculator size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Selecione o nível de ensino para ver os custos</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Informações Adicionais */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Percent className="text-primary mr-2" size={24} />
                <h3 className="text-2xl font-semibold text-foreground">Descontos e Promoções</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <Users className="text-secondary mx-auto mb-2" size={32} />
                  <h4 className="font-semibold text-foreground">Desconto Irmãos</h4>
                  <p className="text-muted-foreground">15% de desconto para 2 ou mais irmãos</p>
                </div>
                <div className="text-center">
                  <DollarSign className="text-accent mx-auto mb-2" size={32} />
                  <h4 className="font-semibold text-foreground">Pagamento Antecipado</h4>
                  <p className="text-muted-foreground">Até 12% de desconto para pagamento anual</p>
                </div>
                <div className="text-center">
                  <GraduationCap className="text-primary mx-auto mb-2" size={32} />
                  <h4 className="font-semibold text-foreground">Bolsas de Estudo</h4>
                  <p className="text-muted-foreground">Programas de bolsas para famílias qualificadas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}