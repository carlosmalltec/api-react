<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "{{%contato}}".
 *
 * @property int $cont_codi
 * @property string|null $cont_nome Nome completo
 * @property string $cont_mail E-mail profissional
 * @property string|null $cont_site Site
 * @property string|null $cont_tel Telefone
 * @property string|null $cont_dcad Data de cadastro
 * @property string|null $cont_dalt Data de alteracao
 * @property int $cont_ucad Usuario responsavel por cadastrar
 * @property int|null $cont_ualt Usuario responsavel por alterar
 * @property string|null $cont_link Linkedin.
 * @property float|null $cont_stat status 1 ativo 0 inativo
 * @property string|null $cont_face Facebook
 * @property string|null $cont_sobr Observações
 */
class Contato extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%contato}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['cont_mail', 'cont_ucad'], 'required'],
            [['cont_dcad', 'cont_dalt'], 'safe'],
            [['cont_ucad', 'cont_ualt'], 'integer'],
            [['cont_stat'], 'number'],
            [['cont_sobr'], 'string'],
            [['cont_nome'], 'string', 'max' => 100],
            [['cont_mail', 'cont_site', 'cont_face'], 'string', 'max' => 150],
            [['cont_tel'], 'string', 'max' => 50],
            [['cont_link'], 'string', 'max' => 255],
            [['cont_mail'], 'unique'],
            [['cont_nome'], 'unique'],
            [['cont_tel'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'cont_codi' => 'ID',
            'cont_nome' => 'Nome Completo',
            'cont_mail' => 'E-mail Profissional',
            'cont_site' => 'Site',
            'cont_tel' => 'Telefone',
            'cont_dcad' => 'Data de Cadastro',
            'cont_dalt' => 'Data de Alteracao',
            'cont_ucad' => 'Usuario Responsavel por Cadastrar',
            'cont_ualt' => 'Usuario Responsavel por Alterar',
            'cont_link' => 'Linkedin.',
            'cont_stat' => 'Status',
            'cont_face' => 'Facebook',
            'cont_sobr' => 'Observações',
        ];
    }
}
