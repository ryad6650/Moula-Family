"use client";

import { useState, forwardRef, type InputHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface CandidatureData {
  prenom: string;
  pseudo: string;
  age: number;
  ville: string;
  motivation: string;
  tiktok: string;
  discord: string;
}

export function CandidatureForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CandidatureData>();

  const onSubmit = async (_data: CandidatureData) => {
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <CheckCircle className="w-16 h-16 text-gold mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider mb-4">
            CANDIDATURE ENVOYÉE
          </h2>
          <p className="text-blanc/40 max-w-md">
            Merci pour ta candidature ! On revient vers toi sur Discord
            rapidement. En attendant, rejoins le serveur.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FormField
              label="Prénom"
              error={errors.prenom?.message}
              {...register("prenom", {
                required: "Ton prénom est obligatoire",
                minLength: { value: 2, message: "Minimum 2 caractères" },
              })}
              placeholder="Ton prénom"
            />
            <FormField
              label="Pseudo"
              error={errors.pseudo?.message}
              {...register("pseudo", {
                required: "Ton pseudo est obligatoire",
                minLength: { value: 2, message: "Minimum 2 caractères" },
              })}
              placeholder="Ton pseudo"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FormField
              label="Âge"
              type="number"
              error={errors.age?.message}
              {...register("age", {
                required: "Indique ton âge",
                valueAsNumber: true,
                min: { value: 13, message: "Tu dois avoir au moins 13 ans" },
                max: { value: 99, message: "Âge invalide" },
              })}
              placeholder="Ton âge"
            />
            <FormField
              label="Ville"
              error={errors.ville?.message}
              {...register("ville", {
                required: "Indique ta ville",
                minLength: { value: 2, message: "Minimum 2 caractères" },
              })}
              placeholder="Ta ville"
            />
          </div>

          <FormField
            label="Discord"
            error={errors.discord?.message}
            {...register("discord", {
              required: "Ton pseudo Discord est obligatoire",
              minLength: { value: 2, message: "Minimum 2 caractères" },
            })}
            placeholder="Ton pseudo Discord (ex: moula#1234)"
          />

          <FormField
            label="TikTok (optionnel)"
            error={errors.tiktok?.message}
            {...register("tiktok")}
            placeholder="https://tiktok.com/@tonpseudo"
          />

          <div>
            <label className="block text-[11px] font-sans uppercase tracking-[2px] text-blanc/40 mb-3">
              Pourquoi rejoindre la famille Moula ?
            </label>
            <textarea
              {...register("motivation", {
                required: "Ce champ est obligatoire",
                minLength: {
                  value: 20,
                  message: "Dis-nous en un peu plus (minimum 20 caractères)",
                },
              })}
              rows={5}
              placeholder="Dis-nous pourquoi tu veux nous rejoindre, ce que tu apportes..."
              className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-blanc placeholder:text-blanc/20 focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
            />
            {errors.motivation?.message && (
              <p className="mt-1.5 text-sm text-red-400">
                {errors.motivation.message}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ opacity: 0.9 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 h-14 bg-[#FF2D78] text-noir font-heading text-[18px] tracking-[3px] uppercase rounded-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-noir/30 border-t-noir rounded-full animate-spin" />
            ) : (
              "ENVOYER MA CANDIDATURE"
            )}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, ...props }, ref) => (
    <div>
      <label className="block text-[11px] font-sans uppercase tracking-[2px] text-blanc/40 mb-3">
        {label}
      </label>
      <input
        ref={ref}
        {...props}
        className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-blanc placeholder:text-blanc/20 focus:border-gold focus:outline-none transition-colors duration-300"
      />
      {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
    </div>
  )
);

FormField.displayName = "FormField";
